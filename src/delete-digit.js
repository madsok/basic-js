const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split('').map(el => +el);

  let sliced = [];
  
  for (let i = 0; i < arr.length; i++) {
  	arr.splice(i, 1);
  	sliced.push(+arr.join(''));
    arr = n.toString().split('').map(el => +el);
  }
  
  return Math.max(...sliced);
}

module.exports = {
  deleteDigit
};
