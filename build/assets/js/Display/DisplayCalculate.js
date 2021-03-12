function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var display = document.querySelector('#display');
var displayCalculate = display.children.calculate;

var DisplayCalculate = /*#__PURE__*/function () {
  function DisplayCalculate() {
    _defineProperty(this, "_calculate", void 0);

    this.calculate = [];
  }

  var _proto = DisplayCalculate.prototype;

  _proto.setDisplayContent = function setDisplayContent(value) {
    displayCalculate.textContent = value;
  };

  _proto.clearAll = function clearAll() {
    this.setDisplayContent(null);
    this.calculate = [];
  };

  _createClass(DisplayCalculate, [{
    key: "calculate",
    set: function set(value) {
      this._calculate = value;
    }
  }, {
    key: "total",
    get: function get() {
      return this._total;
    }
  }]);

  return DisplayCalculate;
}();

export default DisplayCalculate;