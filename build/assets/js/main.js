import DisplayTotal from './Display/DisplayTotal.js';
var displayTotal = new DisplayTotal();
var buttonsNumbers = document.querySelectorAll('.buttons-numbers');

var getValueButtonNumbers = function getValueButtonNumbers() {
  buttonsNumbers.forEach(function (buttonNumber) {
    buttonNumber.addEventListener('click', function () {
      displayTotal.add(buttonNumber.textContent);
    });
  });
};

getValueButtonNumbers();