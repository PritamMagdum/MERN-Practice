// * print all possible substring in given string

let str = "abcd";

function substrings(str) {
  let i = 0;
  let j = 0;
  let res = "";

  while (i <= j) {
    res += str[i];
    console.log(res);
  }
  console.log(res);
  i = 0;
  j++;
}

let res = substrings("abcd");
console.log(res);
