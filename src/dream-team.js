const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members) {
    teamName = '';
    n = members.length
    for (let i = 0; i < n; i++){
      if (typeof(members[i]) === 'string') {
        teamName += members[i].trim()[0].toUpperCase();
      }
      
    }
    return teamName.length > 0 ? teamName.split('').sort().join('') : false;
  } else return false;

};
