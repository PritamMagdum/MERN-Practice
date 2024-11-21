// & ------> 19/11/2024
// * 1) Given 3 numbers print second maximum number
// * 2) Given 3 numbers print second minimum number
// * 3) Print the product of maximum number and minimum number among the three numbers
// * 4) Given a set of three inputs you should determine if you should be allowed to drive or not (inputs are boolean)
// 1 input = you have driving licence
// 2 input = you aree tired
// 3 input = you are not drunk(sobar)
// * you should only be allowed to drive
// -> T && F
// ->

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
// ^ Given a set of three inputs you should determine if you should be allowed to drive or not (inputs are boolean)
{
  let licence = true;
  let tired = false;
  let sobar = false;

  if (licence && sobar && tired) {
    console.log("You are tired and we are not allowed to drive");
  } else if (licence && sobar && !tired) {
    console.log("You can drive");
  } else if (licence && !sobar && tired) {
    console.log("You are drunk and we are not allowed to drive");
  } else if (!licence && sobar && !tired) {
    console.log("You dont have licence and we are not allowed to drive");
  } else {
    console.log("You are tired and drunk so we are not allowed to drive");
  }
}

// & ------> 21/11/2024
// ^ 1) find the biggest digit in the given number
// ^ 2) find the smallest digit in the given number
// ^ 3) find the product of the digits
// ^ 4) find the difference of maximum digit and minimum digit
// ^ 5) find the extream digits sum ( 1st digit and last digit)
// ^ 6) find the internal digits sum (exclude 1st and last digit)
// ^ 7) write a program to revers the number
