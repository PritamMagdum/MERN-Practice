// * given number is 165 the output will be 561 in seperate line

let n = 253;
do {
  let last = n % 10;
  n = Math.floor(n / 10);
  console.log(last);
} while (n != 0);
