function upDown(str) {
  let obj = {
    U: 1,
    D: -1,
  };

  let vally = 0;
  for (let i = 0; i < str.length; i++) {
    for (let key of obj.entries()) {
      if (str[i] == key) {
        vally += key[0];
      }
    }
  }
  return vally;
}

let res = upDown("UDUDUDUD");
console.log(res);

/*
for(let i = 0;trek.length)

*/
