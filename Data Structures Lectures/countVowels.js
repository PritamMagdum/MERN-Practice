// * write a function to return the count the no fo vowels in a given string

function countVowels(str) {
  let count = 0;
  str = str.toUpperCase();

  for (let i = 0; i < str.length; i++) {
    if (
      str.charAt(i) == "A" ||
      str.charAt(i) == "E" ||
      str.charAt(i) == "I" ||
      str.charAt(i) == "O" ||
      str.charAt(i) == "U"
    ) {
      console.log(str.charAt(i));
      count++;
    }
  }
  return count++;
}

let res4 = countVowels("AEIOaeiortortgds");
console.log(res4);
