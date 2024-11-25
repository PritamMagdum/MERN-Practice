// ^ 1 ) Given 3 numbers print second maximum number
{
  let a = 9;
  let b = 48;
  let c = 34;

  if ((a > b && a < c) || (a < b && a > c)) {
    console.log("a is second maximum");
  } else if ((b > a && b < c) || (b < a && b > c)) {
    console.log("b is second maximum");
  } else {
    console.log("c is second maximum");
  }
}
