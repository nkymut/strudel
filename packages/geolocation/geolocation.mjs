// geolocation.mjs

import { signal } from '../core/signal.mjs';

/**
 *  The device's current latitude value in degrees.
 * @name latitude
 * @return {Pattern}
 * @synonyms lat
 * @example
 * n(latitude.segment(4).range(0,7)).scale("C:minor")
 *
 */

/**
 *  The device's current longitude value in degrees.
 * @name longitude
 * @return {Pattern}
 * @synonyms lon, long
 * @example
 * n(longitude.segment(4).range(0,7)).scale("C:minor")
 *
 */

/**
 *  The device's current altitude in meters (if available).
 * @name altitude
 * @return {Pattern}
 * @synonyms alt
 * @example
 * n(altitude.segment(4).range(0,7)).scale("C:minor")
 *
 */

/**
 *  The device's current speed in meters per second (if available).
 * @name speed
 * @return {Pattern}
 * @synonyms spd
 * @example
 * n(speed.segment(4).range(0,7)).scale("C:minor")
 *
 */

/**
 *  The device's current heading in degrees (if available).
 * @name heading
 * @return {Pattern}
 * @synonyms hdg
 * @example
 * n(heading.segment(4).range(0,7)).scale("C:minor")
 *
 */

class GeolocationHandler {
  constructor() {
    // Initialize location values
    this._position = {
      latitude: 0,
      longitude: 0,
      altitude: 0,
      speed: 0,
      heading: 0,
    };

    this._permissionStatus = 'unknown';
    this._watchId = null;
  }

  async requestPermissions() {
    if (!navigator.geolocation) {
      console.error('Geolocation is not supported by this browser');
      this._permissionStatus = 'denied';
      return;
    }

    try {
      // Request permission by starting to watch position
      this._watchId = navigator.geolocation.watchPosition(this.handlePosition.bind(this), this.handleError.bind(this), {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 5000,
      });

      this._permissionStatus = 'granted';
    } catch (error) {
      console.error('Geolocation permission request failed:', error);
      this._permissionStatus = 'denied';
    }
  }

  handlePosition(position) {
    // Update position values
    this._position.latitude = position.coords.latitude;
    this._position.longitude = position.coords.longitude;

    // Optional values - set to 0 if not available
    this._position.altitude = position.coords.altitude || 0;
    this._position.speed = position.coords.speed || 0;
    this._position.heading = position.coords.heading || 0;

    // Normalize values for Strudel patterns (0 to 1 range)
    this._position.normalizedLatitude = (position.coords.latitude + 90) / 180; // -90 to 90
    this._position.normalizedLongitude = (position.coords.longitude + 180) / 360; // -180 to 180
    this._position.normalizedAltitude = position.coords.altitude ? (position.coords.altitude + 500) / 1000 : 0; // Rough normalization for typical altitude ranges
    this._position.normalizedSpeed = position.coords.speed ? Math.min(position.coords.speed / 30, 1) : 0; // Normalize assuming max speed of 30 m/s
    this._position.normalizedHeading = position.coords.heading ? position.coords.heading / 360 : 0; // 0 to 360
  }

  handleError(error) {
    console.error('Geolocation error:', error);
    this._permissionStatus = 'denied';
  }

  cleanup() {
    if (this._watchId !== null) {
      navigator.geolocation.clearWatch(this._watchId);
      this._watchId = null;
    }
  }

  // Getter methods for current values
  getPosition() {
    return this._position;
  }
}

// Create singleton instance
const geolocation = new GeolocationHandler();

// Export a function to request permission
export async function enableGeolocation() {
  return geolocation.requestPermissions();
}

// Create signals for location data
export const latitude = signal(() => geolocation.getPosition().normalizedLatitude);
export const longitude = signal(() => geolocation.getPosition().normalizedLongitude);
export const altitude = signal(() => geolocation.getPosition().normalizedAltitude);
export const speed = signal(() => geolocation.getPosition().normalizedSpeed);
export const heading = signal(() => geolocation.getPosition().normalizedHeading);

// Raw (unnormalized) values
export const rawLatitude = signal(() => geolocation.getPosition().latitude);
export const rawLongitude = signal(() => geolocation.getPosition().longitude);
export const rawAltitude = signal(() => geolocation.getPosition().altitude);
export const rawSpeed = signal(() => geolocation.getPosition().speed);
export const rawHeading = signal(() => geolocation.getPosition().heading);

// Aliases for shorter names
export const lat = latitude;
export const lon = longitude;
export const long = longitude;
export const alt = altitude;
export const spd = speed;
export const hdg = heading;
