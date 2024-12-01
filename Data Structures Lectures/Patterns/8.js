//       A
//     A B
//   A B C
// A B C D

let n = 5;
for (let i = 0; i < n; i++) {
  let res = "";
  for (let j = 0; j < n - 1 - i; j++) {
    res = res + " " + " ";
  }
  for (let k = 0; k <= i; k++) {
    let ch = String.fromCharCode(65 + k);
    res = res + ch + " ";
  }
  console.log(res);
}
