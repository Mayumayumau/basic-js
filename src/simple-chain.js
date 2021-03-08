const CustomError = require("../extensions/custom-error");


const chainMaker = {

  links: [],

  getLength() {
    return this.links.length;
  },
  addLink(value) {
    if (value == null) this.links.push('null');
    else if (arguments.length != 0) this.links.push(value.toString());
    else this.links.push(' ');
    
    return this;
  },
  removeLink(position) {
    if (this.links[position]) this.links.splice(position - 1, 1);
    else {
      this.links = [];
      throw new Error;
    }
    return this;
  },
  reverseChain() {
    this.links.reverse();
    return this;
  },
  finishChain() {
    let string = '';
    for (let i=0; i < this.links.length; i++) {
      string += `( ${this.links[i]} )`;
      if (i < this.links.length - 1) {
        string += '~~';
      }
    }
    this.links = [];
    return string;
  }
};

module.exports = chainMaker;
