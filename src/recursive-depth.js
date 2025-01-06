const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    
    function isFlatted(arr) {
      return arr.every(el => !Array.isArray(el));
    }
    
    while (!isFlatted(arr)) {
      count += 1;

			arr = arr.flat(1);
    }
    
    return count;
  }
}

module.exports = {
  DepthCalculator
};
