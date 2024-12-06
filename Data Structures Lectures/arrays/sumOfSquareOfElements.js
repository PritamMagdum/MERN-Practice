function sumOfSquaresOfElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] ** 2;
  }
  return sum;
}

let array = [2, 3, 4];
let res = sumOfSquaresOfElements(array);
console.log(res);
