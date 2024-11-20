let array = [10, 20, 30, 40, 50];

let res = array.find((i) => {
  // console.log("i ");
  return i > 10;
});
console.log(res);

// write a code for asynchronous function
setTimeout(() => {
  console.log("hello");
}, 2000);

array.splice(2, 1);
console.log(array);
