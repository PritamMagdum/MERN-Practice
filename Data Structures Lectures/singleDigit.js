let num = 300;
if (num >= -9 && num <= 9) {
  console.log("Given number is single digit");
} else if ((num >= -99 && num <= -10) || (num >= 10 && num <= 99)) {
  console.log("Given number is two digit");
} else if ((num >= -999 && num <= -100) || (num >= 100 && num <= 999)) {
  console.log("Given number is three digit");
}
