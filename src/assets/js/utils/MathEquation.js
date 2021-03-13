import Convert from './Convert.js';

class MathEquation {
  calculator(equation = 0) {
    if (equation !== 0) {
      const equationArr = Convert.stringToArray(equation);
      const equationChanged = Convert.symbolMathToMathComp(equationArr);
      const equationParsed = Convert.arrayToString(equationChanged);
      return eval(equationParsed);
    }

    return 0;
  }

  reverseSignal(value) {
    return String(value * -1);
  }
}

export default new MathEquation();