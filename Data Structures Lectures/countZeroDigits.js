function countZeroDigits(num) {
  let count = 0;
  do {
    let rem = num % 10;
    if (rem == 0) {
      count++;
    }
    num = Math.floor(num / 10);
  } while (num != 0);
  return count;
}

let res = countZeroDigits(4005408);
console.log(res);
