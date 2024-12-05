function numberToBinary(num) {
  let res = "";
  while (num != 0) {
    let rem = num % 2;
    res = rem + res;
    num = Math.floor(num / 2);
  }
  return res;
}

let res = numberToBinary(128);
console.log(res);
