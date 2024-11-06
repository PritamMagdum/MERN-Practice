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
