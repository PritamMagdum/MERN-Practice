let n = 5;
for (let i = 0; i < n; i++) {
  let res = "";
  for (let j = 0; j < i; j++) {
    let ch = String.fromCharCode(65 + j) + " ";

    res = res + ch + " ";
  }
  console.log(res);
}
