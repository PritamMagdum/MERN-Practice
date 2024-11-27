// * reverse word using while backward
function reverseWord(str) {
  str = str.trim();
  let n = str.length - 1;
  let res = "";
  while (n >= 0) {
    res = res + str[n];
    n--;
  }
  return res;
}

let whiBack = reverseWord("pritam");
console.log(whiBack);
