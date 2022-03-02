const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show Input Error Message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.classList.add("error");
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.add("success");
}

// Check email address
function isValidEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email.toLowerCase());
}

// Check required field
function checkRequired(inputArr) {
  for (const element of inputArr) {
    if (element.value.trim() === "") {
      showError(element, `${getFieldName(element)} can't be empty.`);
    } else {
      showSuccess(element);
    }
  }
}

// Get Field Name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Listeners
form.addEventListener("submit", function(e) {
  e.preventDefault();

  checkRequired(username, email, password, password2);
});
