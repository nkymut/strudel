import * as JoyCon from 'joy-con-webhid';
import { signal } from '@strudel/core';
import { logger } from '@strudel/core';
import { buttonMapSettings } from './gamepad.mjs';

class JoyConHandler {
  constructor() {
    this.connectedJoyCons = new Map();
    this._axes = [0, 0, 0, 0]; // [leftX, leftY, rightX, rightY]
    this._buttons = Array(18).fill(0);
    this.GRAVITY = 9.81;

    this._batteryLevel = {
      level: 'unknown',
      raw: 0,
    };

    this._acceleration = {
      x: 0,
      y: 0,
      z: 0,
    };

    this._gravity = {
      x: 0,
      y: 0,
      z: 0,
    };

    this._rotation = {
      alpha: 0,
      beta: 0,
      gamma: 0,
    };

    this._orientation = {
      alpha: 0,
      beta: 0,
      gamma: 0,
    };

    this._quaternion = {
      w: 0,
      x: 0,
      y: 0,
      z: 0,
    };

    this._ringcon = {
      strain: 0,
    };

    this.setupJoyCon();
  }

  async setupJoyCon() {
    // Set up interval to check for Joy-Cons
    setInterval(async () => {
      for (const joyCon of JoyCon.connectedJoyCons.values()) {
        if (joyCon.eventListenerAttached) continue;

        try {
          await joyCon.open();
          await joyCon.enableStandardFullMode();
          await joyCon.enableIMUMode();
          await joyCon.enableVibration();

          joyCon.addEventListener('hidinput', ({ detail }) => {
            this.handleJoyConInput(joyCon, detail);
          });

          joyCon.eventListenerAttached = true;
          logger(`[gamepad] JoyCon ${joyCon.device.productName} connected`);
        } catch (error) {
          logger(`[gamepad] Error setting up JoyCon: ${error.message}`);
        }
      }
    }, 2000);
  }

  handleJoyConInput(joyCon, detail) {
    // Update battery level
    if (detail.batteryLevel) {
      //console.log("detail.batteryLevel", detail.batteryLevel);
      this._batteryLevel = {
        level: detail.batteryLevel.level,
        raw: detail.batteryLevel._raw[0],
      };
    }

    // Update analog sticks
    if (detail.analogStickLeft) {
      this._axes[0] = (parseFloat(detail.analogStickLeft.horizontal) + 1.5) / 3;
      this._axes[1] = (parseFloat(detail.analogStickLeft.vertical) + 1.5) / 3;
    }
    if (detail.analogStickRight) {
      this._axes[2] = (parseFloat(detail.analogStickRight.horizontal) + 1.5) / 3;
      this._axes[3] = (parseFloat(detail.analogStickRight.vertical) + 1.5) / 3;
    }

    // Update buttons
    if (detail.buttonStatus) {
      // Map Joy-Con buttons to our standard format
      const buttonMap = buttonMapSettings.JOYCON;

      // Reset all buttons
      this._buttons.fill(0);

      // Update button states
      Object.entries(detail.buttonStatus).forEach(([button, pressed]) => {
        if (buttonMap[button] !== undefined && typeof pressed === 'boolean') {
          this._buttons[buttonMap[button]] = pressed ? 1 : 0;
        }
      });
    }

    // Update accelerometer (normalize to 0-1 range like motion.mjs)
    if (detail.actualAccelerometer) {
      // console.log("detail.actualAccelerometer", detail.actualAccelerometer);
      const acc = detail.actualAccelerometer;
      this._acceleration = {
        x: (acc.x + 1) / 2,
        y: (acc.y + 1) / 2,
        z: (acc.z + 1) / 2,
      };
    }

    // Update gyroscope (normalize rotation values to 0-1 range like motion.mjs)
    if (detail.actualGyroscope) {
      const gyro = detail.actualGyroscope;

      this._rotation = {
        alpha: (gyro.dps.x + 90) / 180,
        beta: (gyro.dps.y + 90) / 180,
        gamma: (gyro.dps.z + 90) / 180,
      };
    }

    // Update orientation (normalize like motion.mjs)
    if (detail.actualOrientation) {
      //console.log("detail.actualOrientation", detail.actualOrientation);
      this._orientation = {
        alpha: (parseFloat(detail.actualOrientation.alpha) + 90) / 180,
        beta: (parseFloat(detail.actualOrientation.beta) + 90) / 180,
        gamma: (parseFloat(detail.actualOrientation.gamma) + 90) / 180,
      };
    }

    // Update quaternion
    if (detail.quaternion) {
      this._quaternion = { ...detail.quaternion };
    }

    // Update Ring-Con
    if (detail.ringCon) {
      this._ringcon = {
        strain: detail.ringCon.strain,
      };
    }
  }

  // Getters matching motion.mjs naming
  getAcceleration() {
    return this._acceleration;
  }

  getRotation() {
    return this._rotation;
  }

  getOrientation() {
    return this._orientation;
  }

  getQuaternion() {
    return this._quaternion;
  }

  getRingCon() {
    return this._ringcon;
  }

  getBatteryLevel() {
    return this._batteryLevel;
  }

  getAxes() {
    return this._axes;
  }

  getButtons() {
    return this._buttons;
  }

  async connect() {
    try {
      await JoyCon.connectJoyCon();
      logger('[gamepad] JoyCon connection initiated');
    } catch (error) {
      logger(`[gamepad] Error connecting JoyCon: ${error.message}`);
    }
  }
}

// Module-level state store for toggle states (like in gamepad.mjs)
const joyconStates = new Map();
let activeJoyConHandler = null;

export const joycon = (index = 0) => {
  if (!activeJoyConHandler) {
    logger(`[gamepad] Creating new JoyConHandler`);
    activeJoyConHandler = new JoyConHandler();
    activeJoyConHandler.connect();
  }

  // Create base signal that polls Joy-Con state
  const baseSignal = signal((t) => {
    const axes = activeJoyConHandler.getAxes();
    const buttons = activeJoyConHandler.getButtons();
    const acceleration = activeJoyConHandler.getAcceleration();
    const rotation = activeJoyConHandler.getRotation();
    const orientation = activeJoyConHandler.getOrientation();
    const quaternion = activeJoyConHandler.getQuaternion();
    const ringcon = activeJoyConHandler.getRingCon();
    const battery = activeJoyConHandler.getBatteryLevel();

    return {
      axes,
      buttons,
      acceleration,
      rotation,
      orientation,
      quaternion,
      ringcon,
      battery,
      t,
    };
  });

  // Create axes patterns
  const axes = {
    x1: baseSignal.fmap((state) => state.axes[0]),
    y1: baseSignal.fmap((state) => state.axes[1]),
    x2: baseSignal.fmap((state) => state.axes[2]),
    y2: baseSignal.fmap((state) => state.axes[3]),
  };

  // Add bipolar versions
  axes.x1_2 = axes.x1.toBipolar();
  axes.y1_2 = axes.y1.toBipolar();
  axes.x2_2 = axes.x2.toBipolar();
  axes.y2_2 = axes.y2.toBipolar();

  // Create button patterns with toggle state
  const buttons = Array(18)
    .fill(null)
    .map((_, i) => {
      // Create unique key for this joycon+button combination
      const stateKey = `joycon${index}_btn${i}`;

      // Initialize toggle state if it doesn't exist
      if (!joyconStates.has(stateKey)) {
        joyconStates.set(stateKey, {
          lastButtonState: 0,
          toggleState: 0,
        });
      }

      // Direct button value pattern
      const btn = baseSignal.fmap((state) => state.buttons[i]);

      // Button toggle pattern with persistent state
      const toggle = baseSignal.fmap((state) => {
        const currentState = state.buttons[i];
        const buttonState = joyconStates.get(stateKey);

        if (currentState === 1 && buttonState.lastButtonState === 0) {
          // Toggle the state on rising edge
          buttonState.toggleState = buttonState.toggleState === 0 ? 1 : 0;
        }

        buttonState.lastButtonState = currentState;
        return buttonState.toggleState;
      });

      return { value: btn, toggle };
    });

  // Create motion control patterns (matching motion.mjs naming)
  const motion = {
    // Accelerometer (with aliases matching motion.mjs)
    accelerationX: baseSignal.fmap((state) => state.acceleration.x),
    accelerationY: baseSignal.fmap((state) => state.acceleration.y),
    accelerationZ: baseSignal.fmap((state) => state.acceleration.z),
    // Add rotation
    rotationAlpha: baseSignal.fmap((state) => state.rotation.alpha),
    rotationBeta: baseSignal.fmap((state) => state.rotation.beta),
    rotationGamma: baseSignal.fmap((state) => state.rotation.gamma),

    // Add orientation
    orientationAlpha: baseSignal.fmap((state) => state.orientation.alpha),
    orientationBeta: baseSignal.fmap((state) => state.orientation.beta),
    orientationGamma: baseSignal.fmap((state) => state.orientation.gamma),
    // Add Ring-Con
    ringStrain: baseSignal.fmap((state) => state.ringcon.strain),
  };

  // Add accelerometer aliases
  motion.accX = motion.accelerationX;
  motion.accY = motion.accelerationY;
  motion.accZ = motion.accelerationZ;

  // Add rotation aliases
  motion.rotA = motion.rotationAlpha;
  motion.rotB = motion.rotationBeta;
  motion.rotG = motion.rotationGamma;
  motion.rotX = motion.rotationBeta;
  motion.rotY = motion.rotationGamma;
  motion.rotZ = motion.rotationAlpha;

  // Add orientation aliases
  motion.oriA = motion.orientationAlpha;
  motion.oriB = motion.orientationBeta;
  motion.oriG = motion.orientationGamma;
  motion.oriX = motion.orientationBeta;
  motion.oriY = motion.orientationGamma;
  motion.oriZ = motion.orientationAlpha;

  // Use shared JOYCON button mapping
  const buttonMap = buttonMapSettings.JOYCON;

  // Return an object with all controls
  return {
    ...axes,
    buttons,
    ...Object.fromEntries(
      Object.entries(buttonMap).flatMap(([key, index]) => [
        [key.toLowerCase(), buttons[index].value],
        [key.toUpperCase(), buttons[index].value],
        [`tgl${key.toLowerCase()}`, buttons[index].toggle],
        [`tgl${key.toUpperCase()}`, buttons[index].toggle],
      ]),
    ),
    ...motion,
    connect: () => activeJoyConHandler.connect(),
    battery: baseSignal.fmap((state) => state.battery),
    raw: baseSignal,
  };
};

// Export state management functions
export const getJoyConStates = () => Object.fromEntries(joyconStates);
export const clearJoyConStates = () => joyconStates.clear();
