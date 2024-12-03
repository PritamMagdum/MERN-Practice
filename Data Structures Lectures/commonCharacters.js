function commonCharacters(str1, str2) {
  str1.toLowerCase();
  str2.toLowerCase();

  let obj1 = {};
  let obj2 = {};
  let commonChars = "";

  for (let i = 0; i < str1.length; i++) {
    if (obj1[str1[i]]) {
      obj1[str1[i]] = obj1[str1[i]] + 1;
    } else {
      obj1[str1[i]] = 1;
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (obj2[str2[i]]) {
      obj2[str2[i]] = obj2[str2[i]] + 1;
    } else {
      obj2[str2[i]] = 1;
    }
  }
  for (let key1 in obj1) {
    for (let key2 in obj2) {
      if (key1 == key2) {
        commonChars += key1;
      }
    }
  }
  return commonChars == "" ? "No common characters are present" : commonChars;
}

let res = commonCharacters("abc", "sdg");
console.log(res);
