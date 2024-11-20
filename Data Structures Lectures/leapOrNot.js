// * write a program to check the given year is leap or not

let year = 400;

if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
  console.log("The year is leap");
} else {
  console.log("NOt a leap year");
}

console.log(true && false);
