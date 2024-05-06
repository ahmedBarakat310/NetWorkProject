let x = "";

function setDefultUsers() {
  let users0 = [{ username: "admin", password: "0000" }];
  if (localStorage.getItem("users") == null || localStorage.getItem("users")== []) {
    localStorage.setItem("users", JSON.stringify(users0));
   
  } else {
    users0 = JSON.parse(localStorage.getItem("users"));

    localStorage.setItem("users", JSON.stringify(users0));

  }
}


// get username and password if you for get it
let forgetPassword = document.getElementById("forgetPassword");
forgetPassword.addEventListener("click", () => {
  alert("UserName:admin,Password:0000, no correct way");
});

// set defult user to localstorage 

// control with login button to work his function

var loginFormAnchor = document.querySelector("#loginForm a");
loginFormAnchor.addEventListener("click", validateLoginForm);
function validateLoginForm() {
  var username = document.getElementById("loginUsername").value;
  var password = document.getElementById("loginPassword").value;
  var errorDiv = document.getElementById("loginError");
setDefultUsers()


  errorDiv.innerHTML = "";

  if (username.trim() === "") {
    errorDiv.innerHTML = "Please enter your username";
    return false;
  }

  if (password.trim() === "") {
    errorDiv.innerHTML = "Please enter your password";
    return false;
  }

  var users = JSON.parse(localStorage.getItem("users")) || [];
  var foundUser = users.find(
    (user) => user.username === username && user.password === password
  );
  if (!foundUser) {
    errorDiv.innerHTML = "Invalid username or password";
    return false;
  }
  loginFormAnchor.href = "home.html"
  return true;
}

var SignUpFormAnchor = document.getElementById("#regBtn");

function validateRegisterForm() {
  var username = document.getElementById("registerUsername").value;
  var email = document.getElementById("registerEmail").value;
  var password = document.getElementById("registerPassword").value;
  var errorDiv = document.getElementById("registerError");
  errorDiv.innerHTML = "";
  errorDiv.classList.remove("green");

  if (username.trim() === "") {
    errorDiv.innerHTML = "Please enter a username";
    return false;
  }

  if (email.trim() === "") {
    errorDiv.innerHTML = "Please enter an email";
    return false;
  } else if (!validateEmail(email)) {
    errorDiv.innerHTML = "Please enter a valid email address";
    return false;
  }

  if (password.trim() === "") {
    errorDiv.innerHTML = "Please enter a password";
    return false;
  }

  var users = JSON.parse(localStorage.getItem("users")) || [];
  var existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    errorDiv.innerHTML = "Username already exists";
    return false;
  }

  users.push({ username: username, email: email, password: password });
  localStorage.setItem("users", JSON.stringify(users));

  errorDiv.innerHTML = "Registration successful!";
  errorDiv.classList.add("green");

  return true;
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
