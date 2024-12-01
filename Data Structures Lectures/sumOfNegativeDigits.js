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
