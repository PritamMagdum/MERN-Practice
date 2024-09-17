
function HOF(callBack, values) {
    callBack(Number(values[0]), Number(values[1]), Number(values[2]), Number(values[3]));
}

let res = prompt("Enter values like 10,20,30... comma separated for Perimeter \n examples : \n 1) for triangle 10,20,30 \n 2) for Traipzoid 10,20,30,40");
let inputs = res.split(",");

function allPerimeters(a, b, c, d) {
    console.log(`Perimeter of Triangle ${a},${b},${c} is => ${a + b + c}`);
    console.log(`Perimeter of Square ${a} is => ${4 * a}`);
    console.log(`Perimeter of Rectangle ${a},${b} is => ${2 * (a + b)}`);
    console.log(`Perimeter of Parallelogram ${a},${b} is => ${2 * (a + b)}`);
    console.log(`Perimeter of Trapezoid ${a},${b},${c},${d} is => ${a + b + c + d}`);
    console.log(`Perimeter of Regular n-agon ${a} is => ${5 * a}`);
    console.log(`Perimeter of Circle ${a} is => ${2 * 3.14 * a}`);
}
HOF(allPerimeters, inputs);



