// * 2nd max Digit in given number

function secondMax(num) {
  let high = -Infinity;
  let second = -Infinity;

  if (num < 10) {
    return "Enter valid number to calculate 2nd max number";
  }

  do {
    let rem = num % 10;
    if (rem >= high) {
      second = high;
      high = rem;
    } else if (rem > second && rem < high) {
      second = rem;
    }
    num = Math.floor(num / 10);
  } while (num !== 0);
  return second == -Infinity ? -1 : second;
  //   return second;
}

let res = secondMax(898);
console.log(res);
