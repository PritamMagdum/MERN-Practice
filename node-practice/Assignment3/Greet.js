function Greet(time, userName) {
  if (time > 0 && time <= 12) {
    return `Good Morning ${userName} the current time is ${time} am`;
  } else if (time > 12 && time <= 16) {
    return `Good After noon ${userName} the current time is ${time} pm`;
  } else {
    return `Good Evening ${userName} the current time is ${time} pm`;
  }
}

module.exports = { Greet };
