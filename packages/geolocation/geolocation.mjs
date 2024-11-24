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
 * @name geoSpeed
 * @return {Pattern}
 * @synonyms spd
 * @example
 * n(geoSpeed.segment(4).range(0,7)).scale("C:minor")
 *
 */

/**
 *  The device's current heading in degrees (if available).
 * @name geoHeading
 * @return {Pattern}
 * @synonyms hdg
 * @example
 * n(geoHeading.segment(4).range(0,7)).scale("C:minor")
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

export function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth's radius in meters
  const φ1 = (lat1 * Math.PI) / 180;
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in meters
}

export const distanceTo = (latOrCoords, lon) => {
  let targetLat, targetLon;

  if (typeof latOrCoords === 'object' && latOrCoords !== null) {
    // Handle {latitude, longitude} object
    targetLat = latOrCoords.latitude;
    targetLon = latOrCoords.longitude;
  } else {
    // Handle separate lat, lon parameters
    targetLat = latOrCoords;
    targetLon = lon;
  }

  return signal(() =>
    geolocation.calculateDistance(
      geolocation.getPosition().latitude,
      geolocation.getPosition().longitude,
      targetLat,
      targetLon,
    ),
  );
};

export const distance = distanceTo; // alias

/**
 * Extracts coordinates from a Google Maps or OpenStreetMap URL
 * Supports various formats:
 * Google Maps:
 * - https://www.google.com/maps?q=48.8584,2.2945
 * - https://www.google.com/maps/@48.8584,2.2945,15z
 * - https://goo.gl/maps/...
 * - https://maps.google.com/?ll=48.8584,2.2945
 * OpenStreetMap:
 * - https://www.openstreetmap.org/#map=15/48.8584/2.2945
 * - https://www.openstreetmap.org/?mlat=48.8584&mlon=2.2945
 * @param {string} url - Maps URL
 * @returns {{latitude: number, longitude: number} | null}
 */
export function locationFromUrl(url) {
  try {
    const urlObj = new URL(url);

    // Handle OpenStreetMap URLs
    if (urlObj.hostname.includes('openstreetmap.org')) {
      // Format: /#map=15/48.8584/2.2945
      const hashMatch = url.match(/#map=\d+\/(-?\d+\.\d+)\/(-?\d+\.\d+)/);
      if (hashMatch) {
        return {
          latitude: parseFloat(hashMatch[1]),
          longitude: parseFloat(hashMatch[2]),
        };
      }

      // Format: /?mlat=48.8584&mlon=2.2945
      if (urlObj.searchParams.has('mlat') && urlObj.searchParams.has('mlon')) {
        return {
          latitude: parseFloat(urlObj.searchParams.get('mlat')),
          longitude: parseFloat(urlObj.searchParams.get('mlon')),
        };
      }
    }

    // Handle Google Maps URLs
    if (urlObj.hostname.includes('google.com')) {
      // Format: ?q=48.8584,2.2945
      if (urlObj.searchParams.has('q')) {
        const [lat, lng] = urlObj.searchParams.get('q').split(',');
        return { latitude: parseFloat(lat), longitude: parseFloat(lng) };
      }

      // Format: ?ll=48.8584,2.2945
      if (urlObj.searchParams.has('ll')) {
        const [lat, lng] = urlObj.searchParams.get('ll').split(',');
        return { latitude: parseFloat(lat), longitude: parseFloat(lng) };
      }

      // Format: /maps/@48.8584,2.2945,15z
      const matches = url.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
      if (matches) {
        return {
          latitude: parseFloat(matches[1]),
          longitude: parseFloat(matches[2]),
        };
      }
    }

    return null;
  } catch (error) {
    console.error('Failed to parse Maps URL:', error);
    return null;
  }
}

// Helper function that combines coordsFromUrl with distanceTo
export const distanceToUrl = (url) => {
  const coords = locationFromUrl(url);
  if (!coords) return signal(() => 0);
  return distanceTo(coords.latitude, coords.longitude);
};

/**
 * Converts a location keyword into coordinates using OpenStreetMap Nominatim API
 * @param {string} keyword - Location keyword (e.g., "Eiffel Tower, Paris")
 * @returns {Promise<{latitude: number, longitude: number} | null>}
 */
export async function locationFromKeyword(keyword) {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(keyword)}&format=json&limit=1`,
      {
        headers: {
          'User-Agent': 'Strudel/1.0', // Required by Nominatim's terms of use
        },
      },
    );

    const data = await response.json();

    if (!data || !data[0]) {
      console.warn('Location not found:', keyword);
      return null;
    }

    return {
      latitude: parseFloat(data[0].lat),
      longitude: parseFloat(data[0].lon),
    };
  } catch (error) {
    console.error('Failed to geocode location:', error);
    return null;
  }
}

// Helper function that combines locationFromKeyword with distanceTo
export const distanceToKeyword = async (keyword) => {
  const coords = await locationFromKeyword(keyword);
  if (!coords) return signal(() => 0);
  return distanceTo(coords);
};

// Create signals for location data
export const latitude = signal(() => geolocation.getPosition().normalizedLatitude);
export const longitude = signal(() => geolocation.getPosition().normalizedLongitude);
export const altitude = signal(() => geolocation.getPosition().normalizedAltitude);
export const geoSpeed = signal(() => geolocation.getPosition().normalizedSpeed);
export const geoHeading = signal(() => geolocation.getPosition().normalizedHeading);

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
export const spd = geoSpeed;
export const hdg = geoHeading;
