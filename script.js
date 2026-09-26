const email = document.getElementById("email");
const password = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const successMessage = document.getElementById("successMessage");

const signupForm = document.getElementById("signupForm");

let emailValid = false;
let passwordValid = false;


// EMAIL VALIDATION
email.addEventListener("change", function () {

  const emailValue = email.value;

  if (
    emailValue.length > 3 &&
    emailValue.includes("@") &&
    emailValue.includes(".")
  ) {

    emailValid = true;

    emailError.style.display = "none";

  } else {

    emailValid = false;

    emailError.style.display = "block";
  }

  checkValidation();

});


// PASSWORD VALIDATION
password.addEventListener("change", function () {

  const passwordValue = password.value;

  if (passwordValue.length > 8) {

    passwordValid = true;

    passwordError.style.display = "none";

  } else {

    passwordValid = false;

    passwordError.style.display = "block";
  }

  checkValidation();

});


// CHECK BOTH VALIDATIONS
function checkValidation() {

  if (emailValid && passwordValid) {

    emailError.style.display = "none";

    passwordError.style.display = "none";

    successMessage.style.display = "block";

  } else {

    successMessage.style.display = "none";

  }

}


// SUBMIT FORM
signupForm.addEventListener("submit", function (event) {

  event.preventDefault();

  if (emailValid && passwordValid) {

    const confirmation = confirm(
      "Are you sure you want to sign up?"
    );

    if (confirmation) {

      alert("Successful signup!");

    } else {

      window.location.reload();

    }

  } else {

    alert("Please enter valid email and password.");

  }

});