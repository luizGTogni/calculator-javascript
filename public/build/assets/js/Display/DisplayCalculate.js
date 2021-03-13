function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import Display from './Display.js';
import Convert from '../utils/Convert.js';

var DisplayCalculate = /*#__PURE__*/function (_Display) {
  _inheritsLoose(DisplayCalculate, _Display);

  function DisplayCalculate() {
    var _this;

    _this = _Display.call(this) || this;

    _defineProperty(_assertThisInitialized(_this), "_hasOperationProgress", void 0);

    _this.hasOperationProgress = true;
    return _this;
  }

  var _proto = DisplayCalculate.prototype;

  _proto.add = function add(value) {
    if (this.hasOperationProgress) {
      this.hasOperationProgress = false;
    }

    this.calculate += value;
    this.renderCalculate();
    this.renderTotal();
  };

  _proto.remove = function remove() {
    var separateCalculate = Convert.stringToArray(this.calculate);
    separateCalculate.pop();
    var strCalculate = Convert.arrayToString(separateCalculate);
    this.calculate = strCalculate;
    this.renderCalculate();
  };

  _proto.addOperation = function addOperation(operation) {
    this.blockOperation();

    if (!this.hasOperationProgress) {
      this.hasOperationProgress = true;
      this.calculate += operation;
      this.renderCalculate();
    }
  };

  _proto.blockOperation = function blockOperation() {
    var calculateValueFinal = Convert.stringToArray(this.calculate).splice(-1, 1);
    console.log(calculateValueFinal);

    if (calculateValueFinal[0] === '-' || calculateValueFinal[0] === '+' || calculateValueFinal[0] === 'x' || calculateValueFinal[0] === '÷' || calculateValueFinal.length <= 0) {
      this.hasOperationProgress = true;
    } else {
      this.hasOperationProgress = false;
    }
  };

  _createClass(DisplayCalculate, [{
    key: "hasOperationProgress",
    get: function get() {
      return this._hasOperationProgress;
    },
    set: function set(_boolean) {
      this._hasOperationProgress = _boolean;
    }
  }]);

  return DisplayCalculate;
}(Display);

export default DisplayCalculate;