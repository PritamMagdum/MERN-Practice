// ^ 4) write a fucntion to return the length of the last word in sentence

function countLastWordLength(str) {
  str = str.trim();
  let max = 0;
  let len = 0;
  // to iterate the sentence
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      length = 0;
    } else {
      len++;
    }
  }

  return len;
}

let res = countLastWordLength("The sky is beautiful");
console.log(res);

// ^ 5) witre a function to return the length of the word wich is having maximum characters in given string

function countHighestWordLength(str) {
  str = str.trim();
  let max = 0;
  let len = 0;
  // to iterate the sentence
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      if (max < len) {
        max = len;
      }
      length = 0;
    } else {
      len++;
    }
  }
  if (max < len) {
    max = len;
  }
  return len;
}

let res1 = countHighestWordLength("The sky is beautiful");
console.log(res1);
