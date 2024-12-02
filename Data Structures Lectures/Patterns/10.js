//       *
//     * *
//   * * *
// * * * *

let n = 4;
for (let i = 0; i < n; i++) {
  let res = "";
  for (let j = 0; j < n - 1 - i; j++) {
    res = res + " " + " ";
  }
  for (let k = 0; k <= i; k++) {
    res = res + "*" + " ";
  }
  console.log(res);
}
