const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  turns = Math.pow(2, disksNumber) - 1;
  seconds = parseInt(turns * 3600 / turnsSpeed);
  return {turns, seconds};
  
};
