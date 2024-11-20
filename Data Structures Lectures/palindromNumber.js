// Program to write Palindrom Number

let num = 161;

let res;

while (num) {
  res = num % 10;
  num = num / 10;
  console.log(res);
}

console.log(res);
