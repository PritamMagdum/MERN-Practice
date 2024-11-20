// * write a program to check weather the student is pass or fail

let math = 59;
let English = 38;
let science = 36;

// & Using && operator
if (math >= 35 && English >= 35 && science >= 35) {
  console.log("Student is pass");
} else {
  console.log("Student is failed");
}

// & Using || operator
if (math < 35 || English < 35 || science < 35) {
  console.log("Student is failed");
} else {
  console.log("Student is pass");
}

// * nested if else statements
if (math >= 35 && English >= 35 && science >= 35) {
  let avg = parseInt((math + English + science) / 3);
  console.log(avg);
  if (avg > 90) {
    console.log("Pass with distinction");
  } else if (avg > 80 && avg < 90) {
    console.log("First class with Distinction");
  } else if (avg > 70 && avg < 80) {
    console.log("First Class");
  } else if (avg > 60 && avg < 70) {
    console.log("Second Class");
  } else if (avg > 35 && avg < 60) {
    console.log("Just Pass");
  }
} else {
  console.log("Student is failed");
}
