// * 5) find the extream digits sum ( 1st digit and last digit)

function extremeDigitSum(num) {
  let sum = 0;
  let temp = num; // ! Declare after isNegative only
  do {
    let rem = num % 10;
    if (temp == num || num < 10) {
      num = Math.floor(num / 10);
      continue;
    } else {
      sum = sum + rem;
      num = Math.floor(num / 10);
    }
  } while (num != 0);

  return sum;
}

let res = extremeDigitSum(31233);
console.log(res);
