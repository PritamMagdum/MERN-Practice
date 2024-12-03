function isPanagram(str) {
  str = str.toLowerCase();

  let arr = new Array(26).fill(0);
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      let index = str.charCodeAt(i) - 97;
      arr[index] = arr[index] + 1;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      return false;
    }
  }
  return true;
}

let res = isPanagram("abcdefghiklmnopqrstuvwxyz");
console.log(res);
