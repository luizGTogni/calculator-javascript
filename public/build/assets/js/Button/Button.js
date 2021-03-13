import MathEquation from '../utils/MathEquation.js';
var buttonsNumbers = document.querySelectorAll('.buttons-numbers');
var buttonsOperations = document.querySelectorAll('.buttons-operations');
var buttonBackspace = document.querySelector('#button-backspace');
var buttonDecimal = document.querySelector('#button-decimal');
var buttonReverse = document.querySelector('#button-reverse');
var buttonClearAll = document.querySelector('#button-clear-all');
var buttonResult = document.querySelector('#button-result');

var Button = /*#__PURE__*/function () {
  function Button() {}

  var _proto = Button.prototype;

  _proto.handleButtonNumberClick = function handleButtonNumberClick(display) {
    buttonsNumbers.forEach(function (buttonNumber) {
      buttonNumber.addEventListener('click', function () {
        var valueButton = buttonNumber.textContent;
        display.add(valueButton);
      });
    });
  };

  _proto.handleButtonOperationClick = function handleButtonOperationClick(display) {
    buttonsOperations.forEach(function (buttonOperation) {
      buttonOperation.addEventListener('click', function () {
        var valueButton = buttonOperation.textContent;
        display.addOperation(valueButton);
      });
    });
  };

  _proto.handleButtonBackspaceClick = function handleButtonBackspaceClick(display) {
    buttonBackspace.addEventListener('click', function () {
      display.remove();
    });
  };

  _proto.handleButtonDecimalClick = function handleButtonDecimalClick(display) {
    buttonDecimal.addEventListener('click', function () {
      display.addDecimal();
    });
  };

  _proto.handleButtonReverseClick = function handleButtonReverseClick(display) {
    buttonReverse.addEventListener('click', function () {
      display.result = MathEquation.reverseSignal(display.result);
      display.renderTotal();
    });
  };

  _proto.handleButtonClearAllClick = function handleButtonClearAllClick(display) {
    buttonClearAll.addEventListener('click', function () {
      display.clearAll();
    });
  };

  _proto.handleButtonResultClick = function handleButtonResultClick(display) {
    buttonResult.addEventListener('click', function () {
      display.changeTotalPerCalculate();
    });
  };

  return Button;
}();

export default Button;