// * given number is 165 the output will be 561 in seperate line

let n = 253;
do {
  let last = n % 10;
  n = Math.floor(n / 10);
  console.log(last);
} while (n != 0);

// * count the no of digits in the given number
{
  let num = 237;
  let count = 0;

  if (num < 0) num = num * -1;
  else {
    do {
      count += 1;
      num = Math.floor(num / 10);
    } while (num != 0);
  }
  console.log(count);
}

// * print only the odd digits in the given number
{
  console.log("************* Odd digits are **********");
  let n = 0;
  if (n < 0) n = n * -1;
  if (n == 0) console.log("0 is even");
  do {
    let last = n % 10;
    n = Math.floor(n / 10);
    if (last % 2 != 0) console.log(last);
  } while (n != 0);
}

// * sum of the digits in the given number
{
  console.log("************* sum of digits is **********");
  let n = 10000;
  let sum = 0;
  if (n < 0) n = n * -1;
  if (n == 0) console.log("0 is even");
  do {
    let last = n % 10;
    n = Math.floor(n / 10);
    sum += last;
  } while (n != 0);
  console.log(sum);
}

// * for -234
{
  console.log("************* sum of negative digits is **********");
  let n = 1050;
  let isNegative = false;
  let sum = 0;
  if (n < 0) {
    isNegative = true;
    n = n * -1;
  }
  if (n == 0) console.log("0 is even");
  do {
    let last = n % 10;
    n = Math.floor(n / 10);
    if (n < 10 && isNegative) {
      sum -= last;
    } else {
      sum += last;
    }
  } while (n != 0);
  console.log(sum);
}
