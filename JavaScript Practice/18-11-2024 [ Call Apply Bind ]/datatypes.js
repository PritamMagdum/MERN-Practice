// * 2 types of datatypes
// 1) primitive
// 2) non-primitive
// & Primitive - Number,String,null,boolean,undefined,symbol,BigInt

let a = Number(30);
let b = String("hello");
let c = Boolean(1);
let d = null;
let e = undefined;
let f = Symbol(3);
let g = BigInt(4);

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);

// & Non-Primitive - array,function,object
let arr = [10, 20];
let fun = function () {
  console.log("func");
};
let obj = {
  id: 34,
  name: "Pritam",
};
