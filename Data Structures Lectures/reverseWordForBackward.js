// * reverse word using backward direction
function reverseWord(str) {
  str = str.trim();
  let n = str.length;
  let res = "";
  for (let i = n - 1; i >= 0; i--) {
    res = res + str[i];
  }
  return res;
}

let rev = reverseWord("pritam");
console.log(rev);
