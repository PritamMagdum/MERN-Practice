function returnLastWord(str) {
  str = str.trim();
  let lastWord = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      lastWord = "";
    } else {
      lastWord += str[i];
    }
  }
  return lastWord;
}

let res = returnLastWord("the sky is beautiful");
console.log(res);
