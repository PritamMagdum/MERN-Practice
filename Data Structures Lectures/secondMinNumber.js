// ^ 2) Given 3 numbers print second minimum number
{
  let a = 9;
  let b = 48;
  let c = 34;

  if ((a > b && a < c) || (a < b && a > c)) {
    console.log("a is second minimum");
  } else if ((b > a && b < c) || (b < a && b > c)) {
    console.log("b is second minimum");
  } else {
    console.log("c is second minimum");
  }
}
