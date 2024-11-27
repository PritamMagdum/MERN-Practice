function checkPalindromeWord(str) {
  str = str.trim();
  let i = 0;
  let j = str.length - 1;

  while (i <= j) {
    if (str[i] != str[j]) return false;
    i++;
    j--;
  }
  return true;
}

let ans = checkPalindromeWord("DAD");
console.log(ans);
