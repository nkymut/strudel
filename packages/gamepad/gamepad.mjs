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
}

// Replace singleton with factory function
export const gamepad = (index = 0) => {
  const handler = new GamepadHandler(index);

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
    .map((_, i) => signal(() => handler.getButtons()[i]));

  // Return an object with all controls
  return {
    ...axes,
    buttons,
    a: buttons[0],
    b: buttons[1],
    x: buttons[2],
    y: buttons[3],
    l1: buttons[4],
    r1: buttons[5],
    l2: buttons[6],
    r2: buttons[7],
  };
};
