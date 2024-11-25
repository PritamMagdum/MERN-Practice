// * find the factorial of given number
// factorial number = number start with 1 to n;

function calculateFactorial(num) {
  let fact = 1;
  if (num == 0) return 1;
  for (let i = num; i >= 1; i--) {
    fact = fact * i;
  }
  return fact;
}

let res4 = calculateFactorial(3);
console.log(`The factorial of given number is ${res4}`);

// Strong number

function strongNumber(num) {
  let temp = num;
  let sum = 0;

  do {
    let rem = num % 10;
    sum += calculateFactorial(rem);
    num = Math.floor(num / 10);
  } while (num != 0);

  return sum == temp;
}

let res5 = strongNumber(145);
if (res5) {
  console.log("strongNumber");
} else {
  console.log("not strongNumber");
}
