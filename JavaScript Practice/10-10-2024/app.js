// function OnMouseEnter() {
//     document.getElementById("div1").innerHTML += "🤞";
// }
// OnMouseEnter()
// function OnMouseMove() {
//     document.getElementById("div2").innerHTML += "🤞";
// }
// function OnMouseOver() {
//     document.getElementById("div3").innerHTML += "🤞";
// }

let input = document.querySelector("input");
let submitButton = document.querySelector("button");
// console.log(input);

let color = "";

// input.addEventListener("keyup", (e) => {
//     // console.log(e.target.value);
//     color = e.target.value;
//     // e.target.value = color;
// })
input.addEventListener("keyup", (e) => {
    // console.log(e.target.value);
    color = e.target.value;
    // e.target.value = color;
})
// input.addEventListener("keydown", (e) => {
//     console.log(e.target.value);
// })
submitButton.addEventListener("click", () => {
    document.body.style.background = color;
    console.log(color);
})