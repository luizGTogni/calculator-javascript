import MathEquation from '../utils/MathEquation.js';

const buttonsNumbers = document.querySelectorAll('.buttons-numbers');
const buttonsOperations = document.querySelectorAll('.buttons-operations');

const buttonBackspace = document.querySelector('#button-backspace');
const buttonDecimal = document.querySelector('#button-decimal');
const buttonReverse = document.querySelector('#button-reverse');
const buttonClearAll = document.querySelector('#button-clear-all');
const buttonResult = document.querySelector('#button-result');

class Button {
  handleButtonNumberClick(display) {
    buttonsNumbers.forEach(buttonNumber => {
      buttonNumber.addEventListener('click', () => {
        const valueButton = buttonNumber.textContent;
        display.add(valueButton);
      });
    });
  }

  handleButtonOperationClick(display) {
    buttonsOperations.forEach(buttonOperation => {
      buttonOperation.addEventListener('click', () => {
        const valueButton = buttonOperation.textContent;
        display.addOperation(valueButton);
      });
    });
  }

  handleButtonBackspaceClick(display) {
    buttonBackspace.addEventListener('click', () => {
      display.remove();
    });
  }

  handleButtonDecimalClick(display) {
    buttonDecimal.addEventListener('click', () => {
      display.addDecimal();
    });
  }

  handleButtonReverseClick(display) {
    buttonReverse.addEventListener('click', () => {
      display.result = MathEquation.reverseSignal(display.result);
      display.renderTotal();
    });
  }

  handleButtonClearAllClick(display) {
    buttonClearAll.addEventListener('click', () => {
      display.clearAll();
    });
  }

  handleButtonResultClick(display) {
    buttonResult.addEventListener('click', () => {
      display.changeTotalPerCalculate();
    });
  }
}

export default Button;