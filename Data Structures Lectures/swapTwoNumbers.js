// * swap two number without using temp variable
let a = 6;
let b = 4;

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log("a ", a);
console.log("b ", b);
