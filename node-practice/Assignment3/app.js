let { getTime } = require("./getTime");
let { Greet } = require("./Greet");

function GreetWithUsername(userName) {
  let time = getTime();
  return Greet(time, userName);
}

console.log(GreetWithUsername("Pritam"));
