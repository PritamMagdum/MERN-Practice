// * write a function to check weather the given number is perfect number or not

// & perfect number is a positive integer that is equal to the sum of its proper divisor

function checkPerfectNumberOrNot(num) {
  let sum = 0;
  for (let i = 1; i <= Math.floor(num / 2); i++) {
    if (num % i == 0) {
      sum += i;
    }
  }
  return sum == num;
}
let res = checkPerfectNumberOrNot(28);
console.log(res);
if (res) {
  console.log("perfect number");
} else {
  console.log("not a perfect number");
}
