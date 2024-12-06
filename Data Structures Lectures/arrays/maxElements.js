let array = [10, 20, 30, 40, 50];

function maxElements(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

let res = maxElements(array);
console.log(res);
