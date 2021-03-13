import Convert from './Convert.js';

var MathEquation = /*#__PURE__*/function () {
  function MathEquation() {}

  var _proto = MathEquation.prototype;

  _proto.calculator = function calculator(equation) {
    if (equation === void 0) {
      equation = 0;
    }

    if (equation !== 0) {
      var equationArr = Convert.stringToArray(equation);
      var equationChanged = Convert.symbolMathToMathComp(equationArr);
      var equationParsed = Convert.arrayToString(equationChanged);
      return eval(equationParsed);
    }

    return 0;
  };

  _proto.reverseSignal = function reverseSignal(value) {
    return String(value * -1);
  };

  return MathEquation;
}();

export default new MathEquation();