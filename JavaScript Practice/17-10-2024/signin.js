let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;

  if (email != "" && pass != "") {
    let formData = {
      username: email,
      userpass: pass,
    };
    // console.log(name, email, phone, pass, cpass);
    let userData = JSON.parse(localStorage.getItem("userData"));
    if (
      formData.username == userData.useremail &&
      formData.userpass == userData.userpass
    ) {
      open("Home.html");
      form.reset();
    } else {
      alert("Invalid Credentials");
    }
  } else {
    alert("Please fill all details");
  }
});
