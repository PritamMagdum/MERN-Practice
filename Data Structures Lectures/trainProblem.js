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
