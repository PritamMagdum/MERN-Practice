// * write a function to return the biggest digit in the given number

function checkHighest(num) {
  let maxNumber = -Infinity;
  do {
    let rem = num % 10;
    if (rem > maxNumber) {
      maxNumber = rem;
    }
    num = Math.floor(num / 10);
  } while (num != 0);

  return maxNumber;
}

let res = checkHighest(284);
console.log(res);
