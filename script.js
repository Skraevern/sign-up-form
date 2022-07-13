let password = document.getElementById("user_password");
let confirmPassword = document.getElementById("confirm_password");
let passwordValidationText = document.getElementById(
  "password_validation_text"
);
const submitBtn = document.getElementById("submit_btn");

validatePassword = function () {
  if (password.value != confirmPassword.value) {
    passwordValidationText.textContent = "*Passwords don`t match";
    password.style.borderColor = rgb(255, 0, 0);
    confirmPassword.style.borderColor = rgb(255, 0, 0);
  }
  if (password.value === confirmPassword.value) {
    passwordValidationText.textContent = "";
    password.style.borderColor = rgb(0, 128, 0);
    confirmPassword.style.borderColor = rgb(0, 128, 0);
  }
};

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;
