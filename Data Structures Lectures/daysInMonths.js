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
