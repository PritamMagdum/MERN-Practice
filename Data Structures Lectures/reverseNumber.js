// * write a function to reverse the given number;

function reverseNumber(num) {
  let res = 0;
  do {
    let rem = num % 10;
    res = res * 10 + rem;
    num = Math.floor(num / 10);
  } while (num != 0);

  return res;
}

let res = reverseNumber(34443334);
console.log(res);
