// * convert small letters to capital and capital to small

function changeCase(str) {
  let newStr = "";
  str = str.trim();
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      let index = str.charCodeAt(i) - 97;
      let char = String.fromCharCode(65 + index);
      newStr += char;
    } else if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      let index = str.charCodeAt(i) - 65;
      let char = String.fromCharCode(97 + index);
      newStr += char;
    } else {
      newStr += str.charAt(i);
    }
  }
  return newStr;
}

let res5 = changeCase("Hello Pritam How Are You?");
console.log(res5);
