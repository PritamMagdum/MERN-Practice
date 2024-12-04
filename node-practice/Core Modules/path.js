let path = require("path");

console.log(path.basename("c://users/pritam/text.pdf")); // * => text.pdf
console.log(path.dirname("c://users/pritam/text.pdf")); // * => c://users/pritam
console.log(path.extname("c://users/pritam/text.pdf")); // * => .pdf
console.log(path.extname("text._pdf")); // * => ._pdf
console.log(path.extname("text.html")); // * => .html

// it will ignore root
let path1 = path.format({
  dir: "c://users/pritam/",
  root: "/node",
  base: "index.js",
});

console.log(path1);

// if base will be there it will ignore ext
let path2 = path.format({
  root: "/node",
  base: "index",
  ext: "js",
});

console.log(path2);

// it will concat the path
let path3 = path.format({
  root: "/node",
  name: "/index",
  ext: "js",
});

console.log(path3);
