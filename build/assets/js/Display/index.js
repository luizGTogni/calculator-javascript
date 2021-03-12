function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var display = document.querySelector('#display');
var displayCalculate = display.children.calculate;
var displayTotal = display.children.total;

var Display = /*#__PURE__*/function () {
  function Display() {
    _defineProperty(this, "_calculate", []);

    _defineProperty(this, "_total", void 0);

    this._total = 0;
  }

  var _proto = Display.prototype;

  _proto.clearTotal = function clearTotal() {
    displayTotal.textContent = null;
  };

  _proto.clearCalculate = function clearCalculate() {
    displayCalculate.textContent = null;
  };

  _proto.clearAll = function clearAll() {
    this.clearTotal();
    this.clearCalculate();
  };

  return Display;
}();

export default Display;