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
