// * write a program to check the given number is armstrong or not
// armstrong = a number that is equal to the sum of digits of given number and each power of number digits

function digitCount(num) {
  let count = 0;
  do {
    let rem = num % 10;
    if (rem % 1 == 0 && rem % rem == 0) {
      count++;
    }
    num = Math.floor(num / 10);
  } while (num != 0);
  return count;
}
let res = digitCount(3435);

function isArmstrongOrNot(num) {
  let temp = num;
  let sum = 0;
  let count = digitCount(num);
  do {
    let rem = num % 10;
    sum += rem ** count;
    num = Math.floor(num / 10);
  } while (num != 0);

  return sum == temp;
}

let res1 = isArmstrongOrNot(153);
if (res1) {
  console.log("armstrong number");
} else {
  console.log("not armstrong number");
}

// * check the given number is disrcediscei
// a number set to be a discen number weather the sum of its digits rise to the power of their respective positions is equal to the number itself;

function isDesc(num) {
  let temp = num;
  let count = digitCount(num);
  let sum = 0;
  do {
    let rem = num % 10;
    sum += rem ** count;
    count--;
    num = Math.floor(num / 10);
  } while (num != 0);
  return temp == sum;
}

let res3 = isDesc(89);
console.log(res3);
if (res3) {
  console.log("desce... number");
} else {
  console.log("not des... number");
}
