function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var display = document.querySelector('#display');
var displayTotal = display.children.total;

var DisplayTotal = /*#__PURE__*/function () {
  function DisplayTotal() {
    _defineProperty(this, "_value", void 0);

    this.value = 0;
  }

  var _proto = DisplayTotal.prototype;

  _proto.setDisplayContent = function setDisplayContent(value) {
    if (value === void 0) {
      value = 0;
    }

    displayTotal.textContent = value;
  };

  _proto.getDisplayContent = function getDisplayContent() {
    return displayTotal.textContent;
  };

  _proto.add = function add(value) {
    if (Number(value) > 0 && this.getDisplayContent().length === 1 && this.getDisplayContent() === '0') {
      this.setDisplayContent(null);
    }

    this.value = "" + this.getDisplayContent() + value;
    this.setDisplayContent(this.value);
  };

  _proto.clearAll = function clearAll() {
    this.value = 0;
    this.setDisplayContent(0);
  };

  _createClass(DisplayTotal, [{
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      this._value = value;
    }
  }]);

  return DisplayTotal;
}();

export default DisplayTotal;