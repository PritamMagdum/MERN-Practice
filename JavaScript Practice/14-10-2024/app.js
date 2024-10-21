// let API_key = "42c52847a4d84a71af1cf1a544448c40";
let apikey = "0135c0a7a5199009d87f7fcf4cd208b9";
let input = document.querySelector("#cityName");
let mainDiv = document.getElementById("main");
let weather = document.getElementById("weather");
let country = document.getElementById("country");
let city = document.getElementById("city");
let description = document.getElementById("description");
// console.log(input.value);
// let city = input.value;
// let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

let fetchAPI = async () => {
  // console.log(input.value);
  let data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apikey}&units=metric`
  );
  let finalData = await data.json();
  let img;
  finalData.weather.map((e) => {
    console.log(e);
    weather.innerText = e.main;
    img = e.icon;
    description.innerText = e.description;
  });
  console.log(img);
  // mainDiv.style.backgroundImage = `url(https://openweathermap.org/img/wn/${img}@2x.png)`;
  // mainDiv.style.backgroundImage = `url(./images/rainy.gif)`;
  city.innerText = finalData.name;
  country.innerText = finalData.sys.country;
  console.log(finalData);
};
fetchAPI();

// let btn = document.getElementById("btn_sbn");
// btn.addEventListener("click", fetchAPI);
