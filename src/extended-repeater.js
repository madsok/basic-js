const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  if (str === null || str === undefined) {
    str = 'null';
  } else {
    str = String(str);
  }

  if (options.addition === undefined) {
    options.addition = '';
  } else {
    options.addition = String(options.addition);
  }

  if (options.separator === undefined) {
    options.separator = '+';
  } 

  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  } 

  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }

  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }

  let result = '';
  let additionSum = '';

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    additionSum += options.addition + options.additionSeparator;
  }

  additionSum = additionSum.slice(0, -options.additionSeparator.length);

  for (let i = 0; i < options.repeatTimes; i++) {
    result += str + additionSum + options.separator;
  }

  return result.slice(0, -options.separator.length);
}

module.exports = {
  repeater
};
