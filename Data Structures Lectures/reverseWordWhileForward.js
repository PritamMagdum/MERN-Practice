// * reverse word using while forward
function reverseWord(str) {
  str = str.trim();
  let n = str.length;
  let res = "";
  let i = 0;
  while (i < n) {
    res = str[i] + res;
    i++;
  }
  return res;
}

let whi = reverseWord("pritam");
console.log(whi);
