const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity=false) {
  if (typeof(sampleActivity) != 'string') return false;
  else {
    sampleActivity = parseFloat(sampleActivity, 10);  
    if (sampleActivity && sampleActivity > 0 && sampleActivity < 15) {
      t = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (Math.log(2)/HALF_LIFE_PERIOD));
      return t;
    }
    else return false;
  }
};
