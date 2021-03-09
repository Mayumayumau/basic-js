const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 1;
    let counter = 1;
    arr.forEach(element => {
      if (typeof(element) == 'object') counter = this.calculateDepth(element) + 1;
      if (counter > maxDepth){ 
        maxDepth = counter;
        counter = 1;
      }

      
    });

    return maxDepth;

  }
};