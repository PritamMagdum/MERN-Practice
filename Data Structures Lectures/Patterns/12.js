//      *
//    *   *
//  * * * * *

let n = 4;

for (let i = 0; i < n; i++) {
  let res = "";
  for (let j = 0; j < n - i - 1; j++) {
    res = res + " " + " ";
  }
  for (let k = 0; k < 2 * i + 1; k++) {
    if (k == 0 || k == 2 * i || i == n - 1) {
      res = res + "*" + " ";
    } else {
      res = res + " " + " ";
    }
  }
  console.log(res);
}
