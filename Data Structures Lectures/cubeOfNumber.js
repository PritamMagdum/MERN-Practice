// * find the cube of any given number
{
  let n = 2;
  let res = 1;
  for (let i = 1; i <= 3; i++) res = res * n;
  console.log("the result is ", res);
}
{
  // * using while loop
  let n = 2;
  let i = 1;
  let res = 1;
  while (i <= 3) {
    res = res * n;
    i++;
  }
  console.log(`The cube of 2 is ${res}`);
}
