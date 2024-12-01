/*
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5

*/
let n = 5;
for (let i = 1; i <= n; i++) {
  let res = "";
  for (let j = 1; j <= n; j++) {
    res = res + j + " ";
  }
  console.log(res);
}
