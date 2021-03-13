var Math = /*#__PURE__*/function () {
  function Math() {}

  var _proto = Math.prototype;

  _proto.calculator = function calculator(equation) {
    console.log(equation);
    return eval(equation);
  };

  return Math;
}();

export default new Math();