// * write a program given number print "sanju" if divisible by 3 and print "Geeta" if divisible by 5
// * print "Sanju weds Geeta" if divisible by 3 and 5 both

let num = 0;

if (num % 3 == 0 && num % 5 == 0) {
  console.log("Sanju weds Geeta");
} else if (num % 3 == 0) {
  console.log("Sanju");
} else if (num % 5 == 0) {
  console.log("Geeta");
} else {
  console.log("Number is not divisible by 3 and 5");
}