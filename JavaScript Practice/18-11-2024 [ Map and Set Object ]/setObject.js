// * 2) Set Object

let st = new Set([10, 20, 30, "hi", "hi", "hello", null, undefined]);
console.log(st);

// set.add(any)
st.add(100);
st.add(1);
st.add("new");
console.log(st);
// set.has(any)
console.log(st.has("hi"));
// set.delete(string)
st.delete("hi");
console.log(st);
// set.clear()
// set.keys()
// set.values()
// set.entries()
// set.size
