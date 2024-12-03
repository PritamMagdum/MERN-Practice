// ^ 2) write a function to check weather the s1 and s2 strings are anagram or not

function checkAnagramOrNot(str1, str2) {
  let isAnagram = false;
  while (str1.length == str2.length) {
    if (str1.includes(str2)) {
      isAnagram = true;
    } else {
      isAnagram = false;
    }
  }
  return isAnagram;
}

let string1 = "abc";
let string2 = "cba";
console.log(checkAnagramOrNot(string1, string2));
