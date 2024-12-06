// * find the sum of the element which are at odd index

function sumOddElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      sum += arr[i];
    }
  }
  return sum;
}

let array = [10, 20, 30, 40, 50, 60];
// let res = sumOddElements(array);

// write a function to return the sum of the Element at the even positions
function sumEvenElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if ((i + 1) % 2 == 0) {
      sum += arr[i];
    }
  }
  return sum;
}

// let array1 = [10, 20, 30, 40, 50, 60];
// let res1 = sumEvenElements(array1);

// * write a function to return the sum of the digits of the array elements

function sumOfDigits(arr) {
  let sumArray = [];
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let sum = 0;
    do {
      let rem = num % 10;
      sum += rem;
      num = Math.floor(num / 10);
    } while (num != 0);
    sumArray.push(sum);
    sum = 0;
  }
  return sumArray;
}

// let res3 = sumOfDigits(array);
// console.log(res3);

// * write a function to return the array of elements given the starting index and ending index (n index is excluded, start is always less than the end)

function makeSlicing(arr, start, end) {
  let res = [];
  if (start < end && end < arr.length) {
    for (let i = start; i < end; i++) {
      res.push(arr[i]);
    }
  } else {
    console.log("invalid conditions plese provide valid paramert values");
  }
  return res;
}

// let res5 = makeSlicing(array, 1, 4);
// console.log(res5);

// * write a function to print the suming sum of the elements

function summingSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    console.log(sum);
  }
  //   return sum;
}

let res6 = summingSum(array);
console.log(res6);

// * write a function to return the adjucent index, whole sum is equal to given target

function adjucentSum(arr, target) {
  let res = [];
  let temp;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 != undefined) {
      if (arr[temp] + arr[i] == target) {
        res.push(temp);
        res.push(i);
      } else {
        temp = i;
      }
    }
  }
  return res.length == 0 ? -1 : res;
}

let res7 = adjucentSum(array, 110);
console.log(res7);
