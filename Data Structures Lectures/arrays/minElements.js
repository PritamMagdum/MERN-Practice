let array = [40, 20, 30, 5, 50];

function minElements(arr) {
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

let res = minElements(array);
console.log(res);
