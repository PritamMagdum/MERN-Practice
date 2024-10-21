let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let pass = document.getElementById("pass").value;
  let cpass = document.getElementById("cpass").value;

  if (name != "" && email != "" && phone != "" && pass != "" && cpass != "") {
    let sure = confirm("Are you sure want to submit?");
    let data = {
      username: name,
      useremail: email,
      userphone: phone,
      userpass: pass,
      usercpass: cpass,
    };
    // console.log(name, email, phone, pass, cpass);
    localStorage.setItem("userData", JSON.stringify(data));
    open("SignIn.html");
    form.reset();
  } else {
    alert("Please fill all details");
  }
});
