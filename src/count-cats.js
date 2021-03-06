const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  catNum = 0;
  for (let i=0; i < backyard.length; i++){
    for (let j=0; j < backyard[i].length; j++){
      if (backyard[i][j] === '^^') catNum++;
    }
  }
  return catNum > 0 ? catNum : 0;
};
