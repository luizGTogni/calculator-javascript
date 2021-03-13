function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var displayElement = document.querySelector('#display');
var displayTotalElement = displayElement.children.total;
var displayCalculateElement = displayElement.children.calculate;

var Display = /*#__PURE__*/function () {
  function Display() {
    _defineProperty(this, "_calculate", void 0);

    _defineProperty(this, "_result", void 0);

    this.calculate = '';
    this.result = '';
  }

  var _proto = Display.prototype;

  _proto.renderCalculate = function renderCalculate() {
    displayCalculateElement.textContent = this.calculate;
  };

  _proto.renderTotal = function renderTotal() {// displayTotalElement.textContent = this.calculate.split(' ');
  };

  _createClass(Display, [{
    key: "calculate",
    get: function get() {
      return this._calculate;
    },
    set: function set(value) {
      this._calculate = value;
    }
  }, {
    key: "result",
    get: function get() {
      return this._result;
    },
    set: function set(str) {
      this._result = str;
    }
  }]);

  return Display;
}();

export default Display;