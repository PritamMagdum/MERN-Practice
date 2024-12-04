function printString(str) {
  let res = "";
  let i = 0;
  while (i < str.length) {
    if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
      let count = 0;
      let noOfDigits = 0;
      for (let j = i; j <= str.length; j++) {
        if (str.charCodeAt(j) >= 48 && str.charCodeAt(j) <= 57) {
          count = count * 10 + Number(str[j]);
          noOfDigits++;
        } else {
          for (let k = 0; k < count; k++) {
            res = res + str[j - noOfDigits - 1];
          }
          break;
        }
      }
      i = i + noOfDigits;
    } else {
      i++;
    }
  }
  return res;
}

let str = "a6b5c2";
console.log(printString(str));
