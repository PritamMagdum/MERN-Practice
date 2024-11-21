// Array Destructuring = []

// let array = [1, 2, 3, 4, 5];

// let [a, b, c, ...restElements] = array;

// console.log(a);
// console.log(c);
// console.log(...restElements);
// console.log(restElements);
// restElements.map((element, index) => {
//   console.log(element, index);
// });
// let allElements = { ...restElements };
// console.log(allElements[0]);

var obj = {
  id: 101,
  name: "Pritam",
};
// let { ...rest } = obj;
let another = Object.assign([], obj);
console.log(obj);
console.log(another);

let [a, v] = another;
