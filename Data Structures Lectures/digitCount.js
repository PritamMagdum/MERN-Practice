// ^ 1) write a function to return the count of prime digits in given number

function digitCount(num) {
  let count = 0;
  do {
    let rem = num % 10;
    if (rem % 1 == 0 && rem % rem == 0) {
      count++;
    }
    num = Math.floor(num / 10);
  } while (num != 0);
  return count;
}
let res = digitCount(3435);
console.log(res);
