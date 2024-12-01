/*
A B C D E
A B C D E
A B C D E
A B C D E
A B C D E
*/

let n = 5;
for (let i = 0; i < n; i++) {
  let res = "";
  for (let j = 0; j < n; j++) {
    res = res + String.fromCharCode(65 + j) + " ";
  }
  console.log(res);
}
