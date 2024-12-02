// * * * * *
//  * * * *
//   * * *
//    * *
//     *

let n = 5;

for (let i = n; i > 0; i--) {
  let res = "";
  for (let j = 0; j < n - i; j++) {
    res = res + " " + " ";
  }

  for (let k = 0; k < i * 2 - 1; k++) {
    res = res + "* ";
  }
  console.log(res);
}
