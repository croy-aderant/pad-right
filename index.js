/**
 * Pads a string with spaces on the right side to reach the specified length.
 * @param {string} str - The string to pad
 * @param {number} length - The desired total length after padding
 * @returns {string} The padded string
 */
function padRight(str, length) {
  if (typeof str !== 'string') {
    str = String(str);
  }
  
  if (typeof length !== 'number' || length < 0) {
    throw new TypeError('Length must be a non-negative number');
  }
  
  const currentLength = str.length;
  if (currentLength >= length) {
    return str;
  }
  
  const paddingLength = length - currentLength;
  return str + ' '.repeat(paddingLength);
}

module.exports = padRight;
