const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

  if (!arr.some(el => el === '--discard-next' || el === '--discard-prev' || el === '--double-next'|| el === '--double-prev')) {
    return arr;
  }
  
  let array = arr.slice();

  for (let i = 0; i < array.length; i++) {
    if (array[i] === '--discard-next' && array[i+1]) {
      array.splice(i+1, 1);
    }
    if (array[i] === '--discard-prev' && array[i-1]) {
      array.splice(i-1, 1);
    }
    if (array[i] === '--double-next' && array[i+1]) {
      array[i] = array[i+1];
    }
    if (array[i] === '--double-prev' && array[i-1]) {
      array[i] = array[i-1];
    }
  }

  return array.filter(el => typeof el !== 'string');
}

module.exports = {
  transform
};
