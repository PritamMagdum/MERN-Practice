console.log("Bubling and Capturing");

let gp = document.getElementById("div1");
let p = document.getElementById("div2");
let c = document.getElementById("div3");

gp.addEventListener(
  "click",
  (e) => {
    gp.style.backgroundColor = "red";
  },
  true
);
p.addEventListener(
  "click",
  (e) => {
    p.style.backgroundColor = "yellow";
  },
  true
);
c.addEventListener(
  "click",
  (e) => {
    c.style.backgroundColor = "green";
  },
  true
);
