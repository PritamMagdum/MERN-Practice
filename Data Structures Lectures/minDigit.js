function minDigit(num) {
  let min = Infinity;
  do {
    let rem = num % 10;
    if (rem <= min) {
      min = rem;
    }
    num = Math.floor(num / 10);
  } while (num != 0);
  return min;
}

let res = minDigit(3569);
console.log(res);
