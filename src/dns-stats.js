const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  
  let arr = domains.map(el => el.split('.').reverse());
  
  let resName = '';
  
  for (let i = 0; i < arr.length; i++) {
    resName = '.' + arr[i].join('.');
    result[resName] =  1;
  }
  
  for (let i = 0; i < arr.length; i++) {
  	let count = 0;
  	for (let j = 0; j < arr.length; j++) {
      if (arr[j].includes(arr[j][i])) {
        count++;
       }
       resName = '.' + arr[j][i];
       result[(arr[j][i-1] ? '.' + arr[j][i-1] : '') + resName] = count;
    }
  }
  
  return result;
}

module.exports = {
  getDNSStats
};
