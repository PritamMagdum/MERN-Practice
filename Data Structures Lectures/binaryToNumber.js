function binaryToNumber(num) {
  let count = 0;
  let sum = 0;
  do {
    let rem = num % 10;
    sum += rem * 2 ** count;
    count++;
  } while (num < 0);
  return sum;
}

let res = binaryToNumber(1001010);
console.log(res);
