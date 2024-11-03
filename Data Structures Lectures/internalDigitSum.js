// * 6) find the extream digits sum and internal digits sum

function extremeDigitSum(num) {
  let externalSum = 0;
  let internalSum = 0;
  let temp = num; // ! Declare after isNegative only
  do {
    let rem = num % 10;
    if (temp == num || num < 10) {
      num = Math.floor(num / 10);
      externalSum = externalSum + rem;
    } else {
      num = Math.floor(num / 10);
      internalSum = internalSum + rem;
    }
  } while (num != 0);

  return `sum of external is ${externalSum} and internal is ${internalSum}`;
}

let res = extremeDigitSum(31233);
console.log(res);
