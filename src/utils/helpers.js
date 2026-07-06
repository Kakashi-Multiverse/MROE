/**
 * Utility helper functions for MROE Dashboard
 */

/**
 * Format a number to fixed decimal places
 * @param {number} value - The value to format
 * @param {number} decimals - Number of decimal places
 * @returns {number} Formatted number
 */
export const formatNumber = (value, decimals = 1) => {
  return parseFloat(value.toFixed(decimals));
};

/**
 * Calculate energy-demand gap for efficiency metric
 * @param {Array} universes - Array of universe objects
 * @returns {number} Efficiency percentage
 */
export const calculateEfficiency = (universes) => {
  const totalGap = universes.reduce((acc, u) => acc + Math.abs(u.energy - u.demand), 0);
  return formatNumber(100 - (totalGap / universes.length));
};

/**
 * Calculate entropy from average stability
 * @param {Array} universes - Array of universe objects
 * @returns {number} Entropy percentage
 */
export const calculateEntropy = (universes) => {
  const avgStability = universes.reduce((acc, u) => acc + u.stability, 0) / universes.length;
  return formatNumber(100 - avgStability);
};

/**
 * Get status color based on stability value
 * @param {number} stability - Stability percentage
 * @returns {string} CSS class name
 */
export const getStabilityColor = (stability) => {
  if (stability > 70) return 'bg-emerald-400';
  if (stability > 40) return 'bg-amber-400';
  return 'bg-rose-500';
};

/**
 * Get status indicator animation based on stability
 * @param {number} stability - Stability percentage
 * @returns {string} CSS animation class
 */
export const getStabilityAnimation = (stability) => {
  if (stability > 70) return '';
  if (stability > 40) return '';
  return 'animate-ping';
};

/**
 * Format timestamp to readable format
 * @returns {string} Formatted timestamp
 */
export const getTimestamp = () => {
  return new Date().toLocaleTimeString();
};
