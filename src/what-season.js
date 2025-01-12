const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  else if (!(date instanceof Date) || (date.hasOwnProperty('toString'))) throw new Error;
  else {
    month = date.getMonth();
    switch (month){
      case 11:
      case 0:
      case 1:
        return 'winter';
        break
      case 2:
      case 3:
      case 4:
        return 'spring';
        break;
      case 5:
      case 6:
      case 7:
        return 'summer';
        break;
      default:
        return 'autumn';
        break;

    }
  }
 };
