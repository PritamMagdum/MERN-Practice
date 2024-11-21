// * write a program to print multiple of three till n number
{
  let n = 10;
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0) {
      console.log(i);
    }
  }
}

// * write a program to find the product of natural nubers upto n
{
  let prod = 1;
  let n = 10;
  for (let i = 1; i <= navigator; i++) {
    prod *= i;
  }
  console.log(prod);
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

// * find the cube of any given number
{
  //   let n = 2;
  //   let res = 1;
  //   for (let i = 1; i <= 3; i++) res = res * n;
  //   console.log("the result is ", res);
}
{
  // * using while loop
  //   let n = 2;
  //   let i = 1;
  //   let res = 1;
  //   while (i <= 3) {
  //     res = res * n;
  //     i++;
  //   }
  //   console.log(`The cube of 2 is ${res}`);
}
