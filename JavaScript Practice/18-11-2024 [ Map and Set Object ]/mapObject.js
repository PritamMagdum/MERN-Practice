// * 1) Map Object

let mp = new Map([
  ["a", 10],
  ["b", 50],
]);

console.log(mp);
// map.get(string)
console.log(mp.get("a"));
// map.set("string",value)
mp.set("c", 30);
console.log(mp);
// map.size
console.log(mp.size);
// map.delete(string)
mp.delete("b");
console.log(mp);
// map.clear()
mp.clear();
console.log(mp);
// map.has()
mp.set("a", 10);
mp.set("b", 20);
mp.set("c", 30);
console.log(mp.has("c"));

// Object Methods
// 1) map.keys()
for (let i of mp.keys()) {
  console.log(i);
}

// 2) map.values()
for (let i of mp.values()) {
  console.log(i);
}

// 3) map.entries()
for (let i of mp.entries()) {
  console.log(i);
}
