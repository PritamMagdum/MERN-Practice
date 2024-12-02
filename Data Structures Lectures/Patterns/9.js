//       1
//     1 2
//   1 2 3
// 1 2 3 4

let n = 5;
for (let i = 0; i < n; i++) {
  let res = "";
  for (let j = 0; j < n - 1 - i; j++) {
    res = res + " " + " ";
  }
  for (let k = 1; k <= i + 1; k++) {
    res = res + k + " ";
  }
  console.log(res);
}
