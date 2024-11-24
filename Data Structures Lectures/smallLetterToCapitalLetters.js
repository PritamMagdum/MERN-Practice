// * write a function to convert from small eltters to capital letters

function smallToCapital(str) {
  let newStr = "";
  str = str.trim();
  for (let i = 0; i < str.length; i++) {
    newStr += String.fromCharCode(str.charCodeAt(i) - 32);
    /* // & new logic
      let index = str.charCodeAt(i)-97;
      let char = String.fromCharCode(65+index);
      res += char;
      */
  }
  return newStr;
}

let res3 = smallToCapital("pritam");
console.log(res3);
