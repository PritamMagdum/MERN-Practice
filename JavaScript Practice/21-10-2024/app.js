let username = document.getElementById("username");
let usernameError = document.getElementById("usernameError");
let password = document.getElementById("password");
let passwordError = document.getElementById("passwordError");

let form = document.querySelector("form");
let emoji = document.getElementById("emoji");
// form Validation

username.addEventListener("input", (e) => {
  e.preventDefault();
  let validation = username.value.length > 8;
  if (!validation) {
    username.classList.add("not_valid");
    username.classList.remove("valid");
    username.style.outline = "none";
    usernameError.innerText = "Username should be 8 characters";
    if (username.value == "") {
      usernameError.innerText = "";
      username.classList.remove("not_valid");
    }
  } else {
    username.classList.add("valid");
    username.classList.remove("not_valid");
    usernameError.innerText = "";
  }
});

password.addEventListener("input", (e) => {
  e.preventDefault();
  let validation = password.value.length > 8;
  if (!validation) {
    password.classList.add("not_valid");
    password.classList.remove("valid");
    password.style.outline = "none";
    passwordError.innerText = "Password should be 8 characters";
    if (password.value == "") {
      passwordError.innerText = "";
      password.classList.remove("not_valid");
    }
  } else {
    password.classList.add("valid");
    password.classList.remove("not_valid");
    passwordError.innerText = "";
  }
});

// show button
let showBtn = document.getElementById("showPass");

showBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (password.value != "") {
    if (password.type == "password") {
      password.type = "text";
      emoji.innerHTML = "😳";
      showBtn.innerText = "Hide Password";
    } else {
      password.type = "password";
      emoji.innerHTML = "😎";
      showBtn.innerText = "Show Password";
    }
  }
});

// submit button
let submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (username.value == "") {
    usernameError.innerText = "Enter Username";
  } else if (password.value == "") {
    passwordError.innerText = "Enter Password";
  } else {
    if (username.value != "" && password.value != "") {
      let sure = confirm("Are you sure want to submit?");
      let data = {
        userName: username.value,
        userPassword: password.value,
      };
      // let prevData = localStorage.getItem("userData");
      // console.log(prevData);
      localStorage.setItem("userData", JSON.stringify(data));
      form.reset();

      // localStorage.setItem
    }
  }
});
