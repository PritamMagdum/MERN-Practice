// * Given seat number of train sleeper coach you have to predict coach number
// - Assume one compartment 80 seats

let seatNumber = 34;
let rem = seatNumber % 8;

if (seatNumber > 0 && seatNumber <= 80) {
  if (rem == 1) {
    console.log("Side Lower");
  } else if (rem == 2) {
    console.log("Side Upper");
  } else if (rem == 3 || rem == 6) {
    console.log("Lower");
  } else if (rem == 4 || rem == 7) {
    console.log("Middle");
  } else if (rem == 5 || rem == 0) {
    console.log("Upper");
  }
} else {
  console.log("Please enter valid Seat Number");
}

// * Given the month number you need to print how many days are present in given month

let month = 4;

if (month >= 1 && month <= 12) {
  if (month == 1 || 3 || 5 || 7 || 8 || 10 || 12) {
    console.log("month contains 31 days");
  } else if (month == 4 || 6 || 9 || 11) {
    console.log("month contains 30 days");
  } else {
    console.log("month contains 28 or 29 days it depends on leap year");
  }
} else {
  console.log("month is not valid");
}

{
  let arr = ["even", "odd"];
  let n = 14;

  let rem = n % 2;
  console.log(arr[rem]);
}

{
  let arr = ["even", "odd"];
  let n = 15;

  let res = n ^ 1;
  console.log(res);
}

{
  let n = 15;

  if (n / 2 == Math.floor(n / 2)) {
    console.log("Given number is even");
  } else {
    console.log("Given number is odd");
  }
}

// * write a program to print natural numbers upto n;

{
  let n = 10;
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
// * sum of natural numbers
{
  let n = 20;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log("The sum of natural number is ", sum);
}
