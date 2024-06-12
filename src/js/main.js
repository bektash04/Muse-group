document.getElementById("submitButton").addEventListener("click", function () {
  validateEmail();
});

document
  .getElementById("emailInput")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      validateEmail();
    }
  });

function validateEmail() {
  var emailInput = document.getElementById("emailInput");
  var email = emailInput.value;
  var emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z\d]+$/;

  if (emailPattern.test(email)) {
    alert("Welcome to the team!");
  } else {
    alert("Email is invalid");
  }
}
