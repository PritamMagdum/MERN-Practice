// * write a function to return the lowest digit in the given number

function checkLowest(num) {
  let minNumber = Infinity;
  do {
    let rem = num % 10;
    if (rem < minNumber) {
      minNumber = rem;
    }
    num = Math.floor(num / 10);
  } while (num != 0);

  return minNumber;
}

let res = checkLowest(284);
console.log(res);
