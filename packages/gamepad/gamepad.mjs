// @strudel/gamepad/index.mjs

import { signal } from '@strudel/core';

class GamepadHandler {
  constructor(index = 0) {
    // Add index parameter
    this._gamepads = {};
    this._activeGamepad = index; // Use provided index
    this._axes = [0, 0, 0, 0];
    this._buttons = Array(16).fill(0);
    this.setupEventListeners();
    this.startPolling();
  }

  setupEventListeners() {
    window.addEventListener('gamepadconnected', (e) => {
      this._gamepads[e.gamepad.index] = e.gamepad;
      if (!this._activeGamepad) {
        this._activeGamepad = e.gamepad.index;
      }
    });

    window.addEventListener('gamepaddisconnected', (e) => {
      delete this._gamepads[e.gamepad.index];
      if (this._activeGamepad === e.gamepad.index) {
        this._activeGamepad = Object.keys(this._gamepads)[0] || null;
      }
    });
  }

  startPolling() {
    const poll = () => {
      if (this._activeGamepad !== null) {
        const gamepad = navigator.getGamepads()[this._activeGamepad];
        if (gamepad) {
          // Update axes (normalized to 0-1 range)
          this._axes = gamepad.axes.map((axis) => (axis + 1) / 2);
          // Update buttons
          this._buttons = gamepad.buttons.map((button) => button.value);
        }
      }
      requestAnimationFrame(poll);
    };
    poll();
  }

  getAxes() {
    return this._axes;
  }
  getButtons() {
    return this._buttons;
  }
}

// Store gamepadValues globally
export const gamepadValues = {};

// Replace singleton with factory function
export const gamepad = (index = 0) => {
  const handler = new GamepadHandler(index);

  // Initialize state for this gamepad if it doesn't exist
  if (!gamepadValues[index]) {
    gamepadValues[index] = Array(16).fill(0);
  }

  // Create signals for this specific gamepad instance
  const axes = {
    x1: signal(() => handler.getAxes()[0]),
    y1: signal(() => handler.getAxes()[1]),
    x2: signal(() => handler.getAxes()[2]),
    y2: signal(() => handler.getAxes()[3]),
  };

  // Add bipolar versions
  axes.x1_2 = axes.x1.toBipolar();
  axes.y1_2 = axes.y1.toBipolar();
  axes.x2_2 = axes.x2.toBipolar();
  axes.y2_2 = axes.y2.toBipolar();

  // Create button signals
  const buttons = Array(16)
    .fill(null)
    .map((_, i) => {
      const btn = signal(() => handler.getButtons()[i]);
      let lastButtonState = 0;
      const toggle = signal(() => {
        const currentState = handler.getButtons()[i];
        if (currentState === 1 && lastButtonState === 0) {
          // Toggle the state
          const newValue = gamepadValues[index][i] === 0 ? 1 : 0;
          gamepadValues[index][i] = newValue;
          // Broadcast the change
          window.postMessage({
            type: 'gamepad-toggle',
            gamepadIndex: index,
            buttonIndex: i,
            value: newValue,
          });
        }
        lastButtonState = currentState;
        return gamepadValues[index][i];
      });
      return { value: btn, toggle };
    });

  // Return an object with all controls
  return {
    ...axes,
    buttons,
    a: buttons[0].value,
    b: buttons[1].value,
    x: buttons[2].value,
    y: buttons[3].value,
    lb: buttons[4].value,
    rb: buttons[5].value,
    lt: buttons[6].value,
    rt: buttons[7].value,
    A: buttons[0].value,
    B: buttons[1].value,
    X: buttons[2].value,
    Y: buttons[3].value,
    LB: buttons[4].value,
    RB: buttons[5].value,
    LT: buttons[6].value,
    RT: buttons[7].value,
    tglA: buttons[0].toggle,
    tglB: buttons[1].toggle,
    tglX: buttons[2].toggle,
    tglY: buttons[3].toggle,
    tglLB: buttons[4].toggle,
    tglRB: buttons[5].toggle,
    tglLT: buttons[6].toggle,
    tglRT: buttons[7].toggle,
    up: buttons[12].value,
    down: buttons[13].value,
    left: buttons[14].value,
    right: buttons[15].value,
    u: buttons[12].value,
    d: buttons[13].value,
    l: buttons[14].value,
    r: buttons[15].value,
    U: buttons[12].value,
    D: buttons[13].value,
    L: buttons[14].value,
    R: buttons[15].value,
    tglUp: buttons[12].toggle,
    tglDown: buttons[13].toggle,
    tglLeft: buttons[14].toggle,
    tglRight: buttons[15].toggle,
    tglU: buttons[12].toggle,
    tglD: buttons[13].toggle,
    tglL: buttons[14].toggle,
    tglR: buttons[15].toggle,
  };
};

// Message-based state updates (add this at the bottom of the file)
if (typeof window !== 'undefined') {
  window.addEventListener('message', (e) => {
    if (e.data.type === 'gamepad-toggle') {
      const { gamepadIndex, buttonIndex, value } = e.data;
      if (!gamepadValues[gamepadIndex]) {
        gamepadValues[gamepadIndex] = Array(16).fill(0);
      }
      gamepadValues[gamepadIndex][buttonIndex] = value;
    }
  });
}
