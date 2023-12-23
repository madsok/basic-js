const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(flag = true) {
    this.flag = flag;
  }
  encrypt(string, key) {
    if (!string || !key) {
      throw new Error('Incorrect arguments!');
    }

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const arr = alphabet.split('');

    let str = string.split('');

    let cleanStr = string.replaceAll(' ', '').toUpperCase().split('').filter(el => el.match(/^[a-zA-Z]/g));

    let k = key;

    if (k.length > cleanStr.length) {
      k = k.slice(0, cleanStr.length).toUpperCase();
    } 

    if (k.length < cleanStr.length) {
      for (let i = key.length; i < cleanStr.length; i += i) {
        k = k + k;
        if (k.length > cleanStr.length) {
          k = k.slice(0, cleanStr.length).toUpperCase();
          break;
        }
      }
    }

    k = k.toUpperCase();

    let cyp =  cleanStr.map((el,i) => arr[(arr.indexOf(el) + arr.indexOf(k[i])) % 26]);
  
    for (let i = 0; i < str.length; i++) {
      if (str[i].match(/^[a-zA-Z]/g)) {
      	str[i] = cyp[0];
        cyp.splice(0,1);
      }
    }

    if (this.flag) {
      return str.join('').toUpperCase();
    }

    return str.reverse().join('').toUpperCase();
  }
  decrypt(string, key) {
    if (!string || !key) {
      throw new Error('Incorrect arguments!');
    }

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const arr = alphabet.split('');

    let str = string.split('');

    let cleanStr = string.replaceAll(' ', '').toUpperCase().split('').filter(el => el.match(/^[a-zA-Z]/g));

    let k = key;

    if (k.length > cleanStr.length) {
      k = k.slice(0, cleanStr.length).toUpperCase();
    } 

    if (k.length < cleanStr.length) {
      for (let i = key.length; i < cleanStr.length; i += i) {
        k = k + k;
        if (k.length > cleanStr.length) {
          k = k.slice(0, cleanStr.length).toUpperCase();
          break;
        }
      }
    }

    k = k.toUpperCase();

    let cyp =  cleanStr.map((el,i) => {
      if (arr.indexOf(el) - arr.indexOf(k[i]) < 0) {
          return arr[(arr.indexOf(el) - arr.indexOf(k[i]) + 26)];
        } else {
          return arr[(arr.indexOf(el) - arr.indexOf(k[i]) % 26)];
        }
    });
  
    for (let i = 0; i < str.length; i++) {
      if (str[i].match(/^[a-zA-Z]/g)) {
      	str[i] = cyp[0];
        cyp.splice(0,1);
      }
    }

    if (this.flag) {
      return str.join('').toUpperCase();
    }

    return str.reverse().join('').toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine
};
