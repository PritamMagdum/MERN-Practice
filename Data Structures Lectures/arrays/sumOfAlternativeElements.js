function sumOfAlternativeElements(arr) {
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    sum += arr[i];
    i += 2;
  }

  return sum;
}

let array = [10, 20, 30, 40, 50];
let res = sumOfAlternativeElements(array);
console.log(res);
