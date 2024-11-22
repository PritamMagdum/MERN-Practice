// * write a program to print multiple of three till n number
{
  let n = 10;
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0) {
      console.log(i);
    }
  }
}

// * even and odd upto n
{
  let evenSum = 0;
  let oddSum = 0;
  let n = 20;
  for (let i = 0; i <= n; i++) {
    if (i % 2 == 0) {
      evenSum += i;
    } else {
      oddSum += i;
    }
  }
  console.log(`The sum of even number is ${evenSum}`);
  console.log(`The sum of odd number is ${oddSum}`);
}
{
  let even = 0;
  let odd = 0;
  let n = 20;
  let i = 1;
  while (i <= n) {
    if (i % 2 == 0) {
      even += i;
    } else {
      odd += i;
    }
  }
  console.log(`The sum of even number is ${even}`);
  console.log(`The sum of odd number is ${odd}`);
}
