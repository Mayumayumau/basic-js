const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  direction = true;
  constructor(mode){
    this.direction = mode;

  }
  encrypt(message, key) {
    
    let codedMessage = '';
    let add = '';

    //adjust key and message length
    let cleanLength = message.length;
    if (/\W/g.test(message)) cleanLength = message.length - message.match(/\W/g).length;
    if (key.length < cleanLength){
      for (let i = key.length; i < cleanLength; i++){
        add += key[i % key.length];
      }
      key += add;
    }
    
    //ENCODING

    message = message.split('');

    let messageIndex, keyIndex;
    for (let i = 0; i < message.length; i++){
      while (!/[a-z]/i.test(message[i])){
        codedMessage += message[i];
        message.splice(i, 1);
        if (!message[i]) break;
      }
      if (message[i]){
        messageIndex = this.alphabet.indexOf(message[i].toUpperCase());
        keyIndex = this.alphabet.indexOf(key[i].toUpperCase());
        
        codedMessage += this.alphabet[(messageIndex + keyIndex) % 26];
      }

    }
    //ABOVE IS VALID

    if (this.direction == false) codedMessage = codedMessage.split('').reverse().join('')
    return codedMessage;

    
  }    
  decrypt(message, key) {
    let decodedMessage = '';
    let add = '';
    

    //adjust key and message length
    let cleanLength = message.length;
    if (/\W/g.test(message)) cleanLength = message.length - message.match(/\W/g).length;
    if (key.length < cleanLength){
      for (let i = key.length; i < cleanLength; i++){
        add += key[i % key.length];
      }
      key += add;
    }
    
    //ENCODING

    message = message.split('');

    let messageIndex, keyIndex;
    for (let i = 0; i < message.length; i++){
      while (!/[a-z]/i.test(message[i])){
        decodedMessage += message[i];
        message.splice(i, 1);
        if (!message[i]) break;
      }
      if (message[i]){
        messageIndex = this.alphabet.indexOf(message[i].toUpperCase());
        keyIndex = this.alphabet.indexOf(key[i].toUpperCase());
        
        decodedMessage += this.alphabet[(messageIndex - keyIndex + 26) % 26];
      }

    }
    //ABOVE IS VALID
    if (this.direction == false) decodedMessage = decodedMessage.split('').reverse().join('');    
    return decodedMessage;
  }
}

module.exports = VigenereCipheringMachine;
