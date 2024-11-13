// * write a function to return number of digits in given number in number

function getNumber(n) {
  do {
    let last = n % 10;
    n = Math.floor(n / 10);
    console.log(last);
  } while (n != 0);
}
