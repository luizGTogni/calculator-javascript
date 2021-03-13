import DisplayCalculate from './Display/DisplayCalculate.js';
import DisplayTotal from './Display/DisplayTotal.js';
import Convert from './utils/Convert.js';
var displayTotal = new DisplayTotal();
var displayCalculate = new DisplayCalculate();
var buttonsNumbers = document.querySelectorAll('.buttons-numbers');
var buttonsOperations = document.querySelectorAll('.buttons-operations');
var buttonBackspace = document.querySelector('#button-backspace'); // Class Button

var hasOperationProgress = true;

function handleButtonsNumberClick() {
  buttonsNumbers.forEach(function (buttonNumber) {
    buttonNumber.addEventListener('click', function () {
      var valueButton = buttonNumber.textContent;
      displayCalculate.add(valueButton);
    });
  });
}

function handleButtonsOperationClick() {
  buttonsOperations.forEach(function (buttonOperation) {
    buttonOperation.addEventListener('click', function () {
      var valueButton = buttonOperation.textContent;
      displayCalculate.addOperation(valueButton);
    });
  });
}

buttonBackspace.addEventListener('click', function () {
  displayCalculate.remove();
});
handleButtonsNumberClick();
handleButtonsOperationClick();