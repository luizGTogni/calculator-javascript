import MathEquation from '../utils/MathEquation.js';

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
    this.result = '0';
  }

  resetState() {
    this.calculate = '';
    this.result = 0;
    this.renderCalculate();
    this.renderTotal();
  }

  renderTotal() {
    displayTotalElement.textContent = this.result;
  }

  renderCalculate() {
    displayCalculateElement.textContent = this.calculate;
  }

  calc() {
    if (!this.isNumberLimitPerScreen(String(this.result))) {
      this.result = MathEquation.calculator(this.calculate || 0);
      this.renderTotal();
    }
  }

  changeTotalPerCalculate() {
    this.calculate = String(this.result);
    this.renderCalculate();
    this._hasOperationProgress = false;
  }

  isNumberLimitPerScreen(display, limit = 18) {
    if (display.length > limit) {
      return true;
    }

    return false;
  }
}

export default Display;