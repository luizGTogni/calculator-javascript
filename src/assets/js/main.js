import DisplayCalculate from './Display/DisplayCalculate.js';
import DisplayTotal from './Display/DisplayTotal.js';
import Convert from './utils/Convert.js';

const displayTotal = new DisplayTotal();
const displayCalculate = new DisplayCalculate();

const buttonsNumbers = document.querySelectorAll('.buttons-numbers');
const buttonsOperations = document.querySelectorAll('.buttons-operations');
const buttonBackspace = document.querySelector('#button-backspace');

// Class Button
function handleButtonsNumberClick() {
  buttonsNumbers.forEach(buttonNumber => {
    buttonNumber.addEventListener('click', () => {
      const valueButton = buttonNumber.textContent;
      displayCalculate.add(valueButton);
    });
  });
}

function handleButtonsOperationClick() {
  buttonsOperations.forEach(buttonOperation => {
    buttonOperation.addEventListener('click', () => {
      const valueButton = buttonOperation.textContent;
      displayCalculate.addOperation(valueButton);
    })
  })
}

buttonBackspace.addEventListener('click', () => {
  displayCalculate.remove();
})

handleButtonsNumberClick();
handleButtonsOperationClick();