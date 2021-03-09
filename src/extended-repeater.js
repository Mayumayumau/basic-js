const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = typeof(str) === null ? 'null' : str;
  options.addition = options.hasOwnProperty('addition') ? String(options.addition) : '';
  options.separator = options.separator || '+';
  options.repeatTimes = options.repeatTimes || 1;
  let add = options.addition;
  if (options.addition != ''){
    options.additionRepeatTimes = options.additionRepeatTimes || 1;
    options.additionSeparator = options.additionSeparator || '|';
    for (let i=1; i < options.additionRepeatTimes; i++){
      add += options.additionSeparator + options.addition;
    }
  }
  let repeatedString = str + add;
  for (let i = 1; i < options.repeatTimes; i++){
    repeatedString += options.separator + str + add;
  }
  

  return repeatedString;
  


};
  