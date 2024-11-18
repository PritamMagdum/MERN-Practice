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
