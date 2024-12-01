function sumEvenDigits(num) {
  let sum = 0;
  do {
    let rem = num % 10;
    if (rem % 2 == 0) {
      sum += rem;
    }
    num = Math.floor(num / 10);
  } while (num != 0);
  return count;
}

let res = sumEvenDigits(4005408);
console.log(res);
