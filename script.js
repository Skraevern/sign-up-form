let password = document.getElementById("user_password");
let confirmPassword = document.getElementById("confirm_password");
let passwordValidationText = document.getElementById(
  "password_validation_text"
);
const submitBtn = document.getElementById("submit_btn");

validatePassword = function () {
  if (password.value != confirmPassword.value) {
    passwordValidationText.textContent = "*Passwords don`t match";
    password.style.borderColor = "#FF0000";
    confirmPassword.style.borderColor = "#FF0000";
  }
  if (password.value === confirmPassword.value) {
    passwordValidationText.textContent = "";
    password.style.borderColor = "#008000";
    confirmPassword.style.borderColor = "#008000";
  }
};

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;
