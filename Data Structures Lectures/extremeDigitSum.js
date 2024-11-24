// * 5) find the extream digits sum ( 1st digit and last digit)

function extremeDigitSum(num) {
  let sum = 0;
  let isNegative = false;
  if (num < 0) {
    isNegative = true;
    num = -1 * num;
  }

  let temp = num; // ! Declare after isNegative only
  do {
    let rem = num % 10;
    if (temp == num || num < 10) {
      if (num < 10 && isNegative) {
        sum = sum - rem;
      } else {
        sum = sum + rem;
      }
    }
    num = Math.floor(num / 10);
  } while (num != 0);

  return sum;
}

let res = extremeDigitSum(-109092);
console.log(res);
