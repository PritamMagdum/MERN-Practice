function maxDigit(num) {
  let max = 0;
  do {
    let rem = num % 10;
    if (rem >= max) {
      max = rem;
    }
    num = Math.floor(num / 10);
  } while (num != 0);
  return max;
}

let res = maxDigit(3569);
console.log(res);
