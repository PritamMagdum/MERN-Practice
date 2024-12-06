// * write a function to return the product of even elements

function productOfEvenElements(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      product *= arr[i];
    }
  }
  return product;
}

let array = [10, 20, 30, 40, 50, 60];
let res = productOfEvenElements(array);
console.log(res);
