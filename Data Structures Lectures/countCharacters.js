// * count the number of characters in string

function countChar(str) {
  str = str.trim();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count++;
    console.log(str.charCodeAt(i));
  }
  return count;
}

let res = countChar("  hello   ");
console.log(res);
