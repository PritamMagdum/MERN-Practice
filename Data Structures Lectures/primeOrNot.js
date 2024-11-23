// * write a function to check from 2 to given number it is prime or not
function checkPrime(num) {
  if (num <= 1) return false;
  if (num == 2) return true;

  for (let i = 3; i < Math.floor(num / 2); i++)
    if (num % i == 0) {
      return false;
    }
  return true;
}

let res = checkPrime(7);
if (res) {
  console.log("number is prime");
} else {
  console.log("number is false");
}

// * write a function weather the given number is prime number of not (true and false)

function checkPrime(num) {
  let isPrime = false;
  if (num % 1 == 0 && num % num == 0) {
    isPrime = true;
  }
  return isPrime;
}

//   let res = checkPrime(7);
//   console.log(`number is ${res}`);
