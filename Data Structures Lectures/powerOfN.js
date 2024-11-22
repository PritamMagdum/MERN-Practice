//it will accept two parameters // & 1)power and 2)number
function powerOfN(pow, num) {
  // base case if number is 1
  if (num == 1) return true;
  //   while loop for if number is not 1 then make as a half
  while (num != 1) {
    if (num % pow == 0) {
      num = Math.floor(num / 2);
    } else {
      return false;
    }
  }
  return true;
}

let res = powerOfN(2, 128); //it will accept two arguments
console.log(res);
