const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (typeof(arr) != 'object') throw new Error;
  transArr = [];
  let i = 0;
  while (i < arr.length){
    switch (arr[i]){
      case '--discard-next':
        i++;
        if (arr[i+1] == '--discard-prev' || arr[i+1] == '--double-prev') i++;
        break;
      case '--discard-prev':
        if (transArr.length > 0) transArr.pop();
        break;
      case '--double-next':
        i++;
        if (i < arr.length) {
          transArr.push(arr[i]);
          transArr.push(arr[i]);
        };
        break;
      case '--double-prev':
        if (transArr.length > 0) transArr.push(transArr[transArr.length - 1]);
        break;
      default:
        transArr.push(arr[i]);
        break;
    }
    i++;
  }
  return transArr;
};
