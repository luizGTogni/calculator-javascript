const display = document.querySelector('#display');
const displayCalculate = display.children.calculate;

class DisplayCalculate {
  _calculate;

  set calculate(value) {
    this._calculate = value;
  } 

  get total() {
    return this._total;
  }

  constructor() {
    this.calculate = [];
  }

  setDisplayContent(value) {
    displayCalculate.textContent = value;
  }

  clearAll() {
    this.setDisplayContent(null);
    this.calculate = [];
  }
}

export default DisplayCalculate