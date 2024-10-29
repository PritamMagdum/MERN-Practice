// write a program to check the Palindrom Number

function isPalindrome(num) {
  let temp = num;
  let res = 0;
  do {
    let rem = num % 10;
    res = res * 10 + rem;
    num = Math.floor(num / 10);
  } while (num != 0);
  return res === temp ? true : false;
}

let res = isPalindrome(1221);
console.log(res);
if (res) {
  console.log("number is palindrom");
} else {
  console.log("number is not palindrom");
}
