import DisplayTotal from './Display/DisplayTotal.js';

const displayTotal = new DisplayTotal();

const buttonsNumbers = document.querySelectorAll('.buttons-numbers');

const getValueButtonNumbers = () => {
  buttonsNumbers.forEach(buttonNumber => {
    buttonNumber.addEventListener('click', () => {
      displayTotal.add(buttonNumber.textContent);
    });
  });
}

getValueButtonNumbers();