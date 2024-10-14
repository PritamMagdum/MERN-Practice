console.log("Array Methods");

let array = [10, 20, 30, 40, 50, 60];
let result = array.find((ele) => {
    return ele > 20;
})
console.log(result);