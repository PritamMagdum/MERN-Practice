// * 3) find the product of the digits

function digitProduct(num) {
  let products = 1;
  do {
    let rem = num % 10;
    products *= rem;
    num = Math.floor(num / 10);
  } while (num != 0);

  return products;
}

let res = digitProduct(234);
console.log(res);
