function maxLengthOfSubstring(str) {
  let max = 0;
  let start = 0;
  let end = 0;
  for (let i = 0; i < str.length; i++) {
    let arr = new Array(256).fill(false);
    for (let j = i; j < str.length; j++) {
      let index = str.charCodeAt(j);
      if (arr[index]) {
        break;
      } else {
        arr[index] = true;
      }
      let len = j - i + 1;
      if (len > max) {
        start = i;
        end = j;
        max = len;
      }
    }
  }
  return str.slice(start, end + 1);
}

let res = maxLengthOfSubstring("geeksforgeeks");

console.log(res);
