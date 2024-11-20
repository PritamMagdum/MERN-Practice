// let array = [10, 20, 30, 40, 50, 60];

// * push()
// console.log(array);
// array.push(70, 80);
// console.log(array);

// * pop()
// console.log(array);
// array.pop();
// console.log(array);

// * shift()
// console.log(array);
// array.shift();
// console.log(array);

// * unshift()
// console.log(array);
// array.unshift(0);
// console.log(array);

// * slice()
// console.log(array);
// let res = array.slice(1, 3);
// console.log(res);
// console.log(array);

// * splice()
// console.log(array);
// array.splice(1, 3, "Twinkle", "weds", "linkle", "Pritam");
// console.log(array);

// * flat()
// let a = [[[[[[[[20]]]], 50]]], 90];
// console.log(a);
// let res = a.flat(Infinity);
// console.log(res);

let array = [10, 20, 30, 40, 50, 60, 24];

// * find()
// console.log(array);
// let res = array.find((e) => {
//   return e == 30;
// });
// console.log(res);

// * findIndex()
// console.log(array);
// let res = array.findIndex((e) => {
//   return e === 20;
// });
// console.log(res);

// * some()
// console.log(array);
// let res = array.some((e) => {
//   return e > 40;
// });
// console.log(res);

// * every()
// console.log(array);
// let res = array.every((e) => {
//   return e > 5;
// });
// console.log(res);

// * map()
// console.log(array);
// let res = array.map((e) => {
//   return e > 20;
// });
// console.log(res);

// * filter()
// console.log(array);
// let res = array.filter((e) => {
//   return e < 20;
// });
// console.log(res);

// * reduce()
// console.log(array);
// let res = array.reduce((acc, val) => {
//   return acc - val;
// });
// console.log(res);

// *Sort()

// let array = ["a", "c", "d", "f", "b"];

// console.log(array);
// let res = array.sort().reverse();
// console.log(res);
// console.log(array);

// * forEach()
// console.log(array);
// let res = array.forEach((e) => {
//   console.log(e);
// });
// console.log(res);

// * reverse();
// console.log(array);
// let res = array.reverse((e) => {
//   return e > 20;
// });
// console.log(res);

// // * for-of()
// for (let e of array) {
//   console.log(e);
// }

// * for-in()
// for (let i in array) {
//   console.log(i);
// }

// * array.keys()
// for (let i of array.keys()) {
//   console.log(i);
// }

// * array.values()
for (let i of array.values()) {
  console.log(i);
}

// * array.entries()
for (let i of array.entries()) {
  console.log(i);
}
