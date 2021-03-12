const display = document.querySelector('#display');
const displayTotal = display.children.total;

class DisplayTotal {
  _value;

  set value(value) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  constructor() {
    this.value = 0;
  }

  setDisplayContent(value = 0) {
    displayTotal.textContent = value;
  }

  getDisplayContent() {
    return displayTotal.textContent;
  }

  add(value) {
    if (
      Number(value) > 0 && 
      this.getDisplayContent().length === 1 && 
      this.getDisplayContent() === '0'
    ) {
      this.setDisplayContent(null);
    }

    this.value = `${this.getDisplayContent()}${value}`;
    this.setDisplayContent(this.value);
  }

  clearAll() {
    this.value = 0;
    this.setDisplayContent(0);
  }
}

export default DisplayTotal;