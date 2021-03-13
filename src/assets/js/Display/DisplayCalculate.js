import Display from './Display.js';
import Convert from '../utils/Convert.js';

class DisplayCalculate extends Display {
  _hasOperationProgress;
  
  set hasOperationProgress(boolean) {
    this._hasOperationProgress = boolean;
  }
  
  get hasOperationProgress() {
    return this._hasOperationProgress;
  }

  _hasDecimalProgress;

  set hasDecimalProgress(boolean) {
    this._hasDecimalProgress = boolean;
  }
  
  get hasDecimalProgress() {
    return this._hasDecimalProgress;
  }

  constructor() {
    super();

    this.hasOperationProgress = true;
    this.hasDecimalProgress = false;
  }

  add(value) {
    if (!this.isNumberLimitPerScreen(this.calculate)) {
      if (this.hasOperationProgress) {
        this.hasOperationProgress = false;
      }
      
      this.calculate += value;
      this.renderCalculate();
      this.calc();
    }
  }

  clearAll() {
    this.resetState();
    this._hasOperationProgress = true;
    this._hasDecimalProgress = false;
  }

  remove() {
    const separateCalculate = Convert.stringToArray(this.calculate);
    separateCalculate.pop();
    const strCalculate = Convert.arrayToString(separateCalculate);
    this.calculate = strCalculate;
    this.renderCalculate();

    this.blockOperation();

    if ((!this.hasDecimalProgress && !this.hasOperationProgress) || 
      this.calculate.length === 0
    ) {
      this.calc();
    }
  }

  addOperation(operation) {
    this.blockOperation();

    if (!this.hasOperationProgress) {
      this.hasOperationProgress = true;
      this.hasDecimalProgress = false;
      this.calculate += operation;
      this.renderCalculate();
    }
  }

  addDecimal() {
    this.blockOperation();
    if (!this.hasDecimalProgress && !this.hasOperationProgress) {
      this.calculate += '.';
      this.renderCalculate();
      this.hasDecimalProgress = true;
    }
  }

  blockOperation() {
    const calculateValueFinal = Convert.stringToArray(this.calculate).splice(-1, 1);

    if (
      calculateValueFinal[0] === '-' || 
      calculateValueFinal[0] === '+' || 
      calculateValueFinal[0] === 'x' || 
      calculateValueFinal[0] === '÷' ||
      calculateValueFinal[0] === '.' ||
      calculateValueFinal.length <= 0
    ) {
      this.hasOperationProgress = true;
    } else {
      this.hasOperationProgress = false;
    }
  }
}

export default DisplayCalculate;