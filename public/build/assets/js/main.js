import Button from './Button/Button.js';
import DisplayCalculate from './Display/DisplayCalculate.js';
var displayCalculate = new DisplayCalculate();
var button = new Button();
button.handleButtonNumberClick(displayCalculate);
button.handleButtonOperationClick(displayCalculate);
button.handleButtonBackspaceClick(displayCalculate);
button.handleButtonDecimalClick(displayCalculate);
button.handleButtonClearAllClick(displayCalculate);
button.handleButtonResultClick(displayCalculate);
button.handleButtonReverseClick(displayCalculate);