class Convert {
  stringToArray(str) {
    const separateNumbers = str.split('');
    return separateNumbers;
  }

  arrayToString(arr) {
    let str = '';

    arr.forEach(value => {
      str += value;
    });

    return str;
  }

  symbolMathToMathComp(symbols) {
    for(const idx in symbols) {
      let symbolChanged = '';
      if (symbols[idx] === '÷') {
        symbolChanged = '/';
      } else if (symbols[idx] === 'x') {
        symbolChanged = '*';
      } else {
        symbolChanged = symbols[idx];
      }

      symbols[idx] = symbolChanged;
    }

    return symbols;
  }
}

export default new Convert();