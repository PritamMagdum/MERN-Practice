// * write a function to return the number of count of capital letters in given string
// & A=65 Z=90 a=97 z=122

function countCapitalLetters(str) {
  let count = 0;
  str = str.trim();
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      count++;
    }
  }
  return count;
}

let res1 = countCapitalLetters("  HelloPritam");
console.log(res1);
