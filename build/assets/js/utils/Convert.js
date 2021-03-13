var Convert = /*#__PURE__*/function () {
  function Convert() {}

  var _proto = Convert.prototype;

  _proto.stringToArray = function stringToArray(str) {
    var separateNumbers = str.split('');
    return separateNumbers;
  };

  _proto.arrayToString = function arrayToString(arr) {
    var str = '';
    arr.forEach(function (value) {
      str += value;
    });
    return str;
  };

  _proto.symbolMathToMathComp = function symbolMathToMathComp(symbols) {
    for (var idx in symbols) {
      var symbolChanged = '';

      if (symbols[idx] === '÷') {
        symbolChanged = '/';
      } else if (symbols[idx] === 'x') {
        symbolChanged = '*';
      } else {
        symbolChanged = symbols[idx];
      }

      symbols[idx] = symbolChanged;
    }

    return symbols;
  };

  return Convert;
}();

export default new Convert();