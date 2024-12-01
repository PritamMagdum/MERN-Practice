/*
A B C D E
A B C D
A B C
A B
A
*/

let n = 5;
for (let i = 0; i < n; i++) {
  let res = "";
  for (let j = n - 1; j >= 0; j--) {
    let ch = String.fromCharCode(65 + j);
    res = res + ch + " ";
  }
  console.log(res);
}
