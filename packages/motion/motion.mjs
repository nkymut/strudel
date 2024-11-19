// DeviceMotionSignals.js

import { signal } from '../core/signal.mjs';

/**
 *  The accelerometer's x-axis value ranges from 0 to 1.
 * @name accelerationX
 * @return {Pattern}
 * @example
 * n(accelerationX.segment(4).range(0,7)).scale("C:minor")
 *
 */

/**
 *  The accelerometer's y-axis value ranges from 0 to 1.
 * @name accelerationY
 * @return {Pattern}
 * @example
 * n(accelerationY.segment(4).range(0,7)).scale("C:minor")
 *
 */

/**
 *  The accelerometer's z-axis value ranges from 0 to 1.
 * @name accelerationZ
 * @return {Pattern}
 * @example
 * n(accelerationZ.segment(4).range(0,7)).scale("C:minor")
 *
 */

/**
 *  The device's rotation around the alpha-axis value ranges from 0 to 1.
 * @name rotationAlpha
 * @return {Pattern}
 * @example
 * n(rotationAlpha.segment(4).range(0,7)).scale("C:minor")
 *
 */

/**
 *  The device's rotation around the beta-axis value ranges from 0 to 1.
 * @name rotationBeta
 * @return {Pattern}
 * @example
 * n(rotationBeta.segment(4).range(0,7)).scale("C:minor")
 *
 */

/**
 *  The device's rotation around the gamma-axis value ranges from 0 to 1.
 * @name rotationGamma
 * @return {Pattern}
 * @example
 * n(rotationGamma.segment(4).range(0,7)).scale("C:minor")
 *
 */

class DeviceMotionHandler {
  constructor() {
    // Initialize sensor values
    this._acceleration = {
      x: 0,
      y: 0,
      z: 0,
    };

    this._rotation = {
      alpha: 0,
      beta: 0,
      gamma: 0,
    };

    this._permissionStatus = 'unknown';
    this.initialize();
  }

  async initialize() {
    try {
      if (typeof window !== 'undefined' && window.DeviceMotionEvent) {
        await this.requestPermissions();
        this.setupEventListeners();
      } else {
        console.warn('DeviceMotion API not available');
      }
    } catch (error) {
      console.error('Failed to initialize device motion:', error);
    }
  }

  async requestPermissions() {
    if (typeof DeviceMotionEvent?.requestPermission === 'function') {
      try {
        // iOS requires explicit permission
        const motionPermission = await DeviceMotionEvent.requestPermission();
        const orientationPermission = await DeviceOrientationEvent.requestPermission();

        this._permissionStatus =
          motionPermission === 'granted' && orientationPermission === 'granted' ? 'granted' : 'denied';
      } catch (error) {
        console.error('Permission request failed:', error);
        this._permissionStatus = 'denied';
      }
    } else {
      // Permission not required on non-iOS devices
      this._permissionStatus = 'granted';
    }
  }

  setupEventListeners() {
    if (this._permissionStatus === 'granted') {
      // Device Motion handler
      window.addEventListener(
        'devicemotion',
        (event) => {
          if (event.accelerationIncludingGravity) {
            // Normalize acceleration values to 0-1 range
            this._acceleration.x = (event.accelerationIncludingGravity.x + 10) / 20;
            this._acceleration.y = (event.accelerationIncludingGravity.y + 10) / 20;
            this._acceleration.z = (event.accelerationIncludingGravity.z + 10) / 20;
          }

          if (event.rotationRate) {
            // Normalize rotation values to 0-1 range
            this._rotation.alpha = (event.rotationRate.alpha + 180) / 360;
            this._rotation.beta = (event.rotationRate.beta + 180) / 360;
            this._rotation.gamma = (event.rotationRate.gamma + 180) / 360;
          }
        },
        true,
      );
    }
  }

  // Getter methods for current values
  getAcceleration() {
    return this._acceleration;
  }
  getRotation() {
    return this._rotation;
  }
}

// Create singleton instance
const deviceMotion = new DeviceMotionHandler();

// Create signals for acceleration
export const accelerationX = signal(() => deviceMotion.getAcceleration().x);
export const accelerationY = signal(() => deviceMotion.getAcceleration().y);
export const accelerationZ = signal(() => deviceMotion.getAcceleration().z);

// Aliases for shorter names
export const accX = accelerationX;
export const accY = accelerationY;
export const accZ = accelerationZ;

// Create signals for rotation
export const rotationAlpha = signal(() => deviceMotion.getRotation().alpha);
export const rotationBeta = signal(() => deviceMotion.getRotation().beta);
export const rotationGamma = signal(() => deviceMotion.getRotation().gamma);

// Aliases for shorter names
export const rotA = rotationAlpha;
export const rotB = rotationBeta;
export const rotG = rotationGamma;

// Bipolar versions (ranging from -1 to 1 instead of 0 to 1)
export const accX2 = accX.toBipolar();
export const accY2 = accY.toBipolar();
export const accZ2 = accZ.toBipolar();

export const rotA2 = rotA.toBipolar();
export const rotB2 = rotB.toBipolar();
export const rotG2 = rotG.toBipolar();
