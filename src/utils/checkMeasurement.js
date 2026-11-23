// src/utils/checkMeasurement.js
// Allowed ranges in inches: [min, max]. Swap in your class's values.
export const RANGES = {
  bust: [20, 80],
  waist: [16, 80],
  napeToWaist: [12, 22],
  shoulder: [15, 20],
  neck: [10, 24],
};

export function checkMeasurement(text, min, max) {
  if (text === '') return 'Please enter a value';
  const num = Number(text);
  if (Number.isNaN(num)) return 'Please enter a number';
  if (num < min || num > max) return `Please enter a value between ${min} and ${max} in`;
  return '';
}