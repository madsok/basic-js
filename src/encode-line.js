const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length > 0) {
    let arr = str.match(/(.)\1*/g);

    return arr.map((el, i) => el.length > 1 ? el.length + arr[i][0] : arr[i][0]).join('');
  }
  return '';
}

module.exports = {
  encodeLine
};
