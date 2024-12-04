// ^ 1) Concat two strings alternatively
// str1 = "abc"
// str2 = "xyz"
// ans=> axbycz

function concatTwoStrings(str1, str2) {
  let res = "";
  let i = 0;
  let j = 0;
  while (str1[i] !== undefined || str2[j] !== undefined) {
    if (str1[i] !== undefined) {
      res = res + str1[i];
      i++;
    }

    if (str2[j] !== undefined) {
      res = res + str2[j];
      j++;
    }
  }
  return res;
}

let string1 = "abc";
let string2 = "sssss";
console.log(concatTwoStrings(string1, string2));
