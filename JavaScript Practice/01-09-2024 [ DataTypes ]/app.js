console.log("Data Types in JavaScript");
/* 
    & In JS there are 2 types of DataTypes => 
    1) Primitive => 7
    2) Non-Primitive => 3   
*/
// & 1) Primitive DataTypes
// 1. String
let s = "Pritam";
console.log(s);

// 2. Number
let n = 23;
console.log(n);

// 3. null
let c = null;
console.log(c);

// 4. undefined
let d = undefined;
console.log(d);

// 5. BitInt
let e = BigInt;
console.log(e);

// 6. symbol
let f = Symbol;
console.log(f);

// 7. Boolean
let t = true;
let w = false;
console.log(t, w);

// & 2) Non-Primitive DataTypes
// 1. Array []
let arr = [10, 20, 30, 40, 50];
console.log(arr);

// 2. Object {}
let obj = {
  name: "Pritam",
  age: 23,
  address: {
    city: "Kolhapur",
    state: "Maharashtra",
  },
};
console.log(obj);

// 3. Function (){}
function addition(a, b) {
  return a + b;
}
addition(10, 20);
