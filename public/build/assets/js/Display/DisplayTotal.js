function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import Display from './Display.js';

var DisplayTotal = /*#__PURE__*/function (_Display) {
  _inheritsLoose(DisplayTotal, _Display);

  function DisplayTotal() {
    return _Display.call(this) || this;
  }

  return DisplayTotal;
}(Display);

export default DisplayTotal;