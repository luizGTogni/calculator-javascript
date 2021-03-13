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
}

export default new Convert();