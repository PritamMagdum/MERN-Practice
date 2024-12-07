function binaryToNumber(num) {
  let count = 0;
  let sum = 0;
  // Iterate as long as num is greater than 0
  while (num > 0) {
    let rem = num % 10; // Get the last digit of the binary number
    sum += rem * 2 ** count; // Add the value of the digit to sum
    count++; // Move to the next position
    num = Math.floor(num / 10); // Remove the last digit
  }
  return sum;
}

let res = binaryToNumber(1001010);
console.log(res); // Output will be 74
