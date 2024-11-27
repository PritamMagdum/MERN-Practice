// * reverse word using forward direction
function reverseWord(str) {
  str = str.trim();
  let n = str.length;
  let res = "";
  for (let i = 0; i < n; i++) {
    res = str[i] + res;
  }
  return res;
}

let forward = reverseWord("pritam");
console.log(forward);
