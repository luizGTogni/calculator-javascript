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

  constructor() {
    super();

    this.hasOperationProgress = true;
  }

  add(value) {
    if (this.hasOperationProgress) {
      this.hasOperationProgress = false;
    }

    this.calculate += value;
    this.renderCalculate();
    this.renderTotal();
  }

  remove() {
    const separateCalculate = Convert.stringToArray(this.calculate);
    separateCalculate.pop();
    const strCalculate = Convert.arrayToString(separateCalculate);
    this.calculate = strCalculate;
    this.renderCalculate();
  }

  addOperation(operation) {
    this.blockOperation();
    
    if (!this.hasOperationProgress) {
      this.hasOperationProgress = true;
      this.calculate += operation;
      this.renderCalculate();
    }
  }

  blockOperation() {
    const calculateValueFinal = Convert.stringToArray(this.calculate).splice(-1, 1);

    console.log(calculateValueFinal);

    if (
      calculateValueFinal[0] === '-' || 
      calculateValueFinal[0] === '+' || 
      calculateValueFinal[0] === 'x' || 
      calculateValueFinal[0] === '÷' ||
      calculateValueFinal.length <= 0
    ) {
      this.hasOperationProgress = true;
    } else {
      this.hasOperationProgress = false;
    }
  }
}

export default DisplayCalculate;