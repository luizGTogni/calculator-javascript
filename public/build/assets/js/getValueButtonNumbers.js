var buttonsNumbers = document.querySelectorAll('.buttons-numbers');

function handleButtonNumbers() {
  return this.textContent;
}

function getValueButtonNumbers() {
  return buttonsNumbers.forEach(function (buttonNumber) {
    console.log(buttonNumber.addEventListener('click', handleButtonNumbers));
  });
}

export default getValueButtonNumbers;