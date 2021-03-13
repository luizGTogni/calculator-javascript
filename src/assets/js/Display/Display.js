const displayElement = document.querySelector('#display');
const displayTotalElement = displayElement.children.total;
const displayCalculateElement = displayElement.children.calculate;

class Display {
  _calculate;

  set calculate(value) {
    this._calculate = value;
  }

  get calculate() {
    return this._calculate;
  }

  _result;

  set result(str) {
    this._result = str;
  }

  get result() {
    return this._result;
  }

  constructor() {
    this.calculate = '';
    this.result = '';
  }

  renderCalculate() {
    displayCalculateElement.textContent = this.calculate;
  }

  renderTotal() {
    // displayTotalElement.textContent = this.calculate.split(' ');
  }
}

export default Display;