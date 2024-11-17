// * write a function to print all prime numbers upto n
function checkPrime(num) {
  for (let i = 2; i <= num; i++) {
    if (num % i == 0) {
      console.log(i);
    }
  }
}

let res1 = checkPrime(678);
