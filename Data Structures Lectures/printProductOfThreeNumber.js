// ^ 3) Print the product of maximum number and minimum number among the three numbers
{
  let a = 9;
  let b = 48;
  let c = 34;

  function product(num1, num2) {
    console.log("the product of two numbers are : ", num1 * num2);
  }

  if (a > b && a > c) {
    if (b < c) {
      product(a, b);
    } else {
      product(a, c);
    }
  } else if (b > a && b > c) {
    if (a < c) {
      product(b, a);
    } else {
      product(b, c);
    }
  } else {
    if (a < b) {
      product(c, a);
    } else {
      product(c, b);
    }
  }
}
