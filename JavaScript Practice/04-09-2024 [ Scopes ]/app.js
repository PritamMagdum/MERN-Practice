// & Scopes in JavaScript
/* 
In JavaScript there are 4 Scopes are available
~ 1) Local Scope (Functional Scope)
~ 2) Script Scope
~ 3) Global Scope
~ 4) Bloack Scope
*/
// ~ 1] Local Scope
function demo() {
  let a = 10;
  let b = 20;
  console.log(a + b);
}
demo();

// ~ 2] Script Scope
let s = "Pritam";
const id = 1001;
console.log(s, id);

// ~ 3] Block Scope
{
  let a = 20;
  let b = 30;
  console.log(a + b);
}

// ~ 4] Global Scope
var g = "Global Scope";
console.log(g);
