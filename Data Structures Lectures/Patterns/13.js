//  * * * * *
//    *   *
//      *

let n = 5;
for (let i = n; i > 0; i--) {
  let res = "";
  for (let j = 0; j < n - i; j++) {
    res = res + " " + " ";
  }
  for (let k = 2 * i - 1; k > 0; k--) {
    if (k == 1 || i == n || k == 2 * i - 1) {
      res = res + "*" + " ";
    } else {
      res = res + " " + " ";
    }
  }
  console.log(res);
}
