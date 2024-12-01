function targetDigit(num, target) {
  let hasTarget = false;
  do {
    let rem = num % 10;
    if (rem == target) {
      hasTarget = true;
    }
    num = Math.floor(num / 10);
  } while (num != 0);
  return hasTarget;
}

let res = targetDigit(4005408, 5);
console.log(res);
