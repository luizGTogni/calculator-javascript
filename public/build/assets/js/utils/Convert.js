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

  return Convert;
}();

export default new Convert();