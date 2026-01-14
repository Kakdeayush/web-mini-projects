const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const phone = document.getElementById("phone");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

function setError(input, message) {
  const group = input.parentElement;
  group.className = "input-group error";
  group.querySelector("small").innerText = message;
}

function setSuccess(input) {
  const group = input.parentElement;
  group.className = "input-group success";
}

function validateInputs() {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const phoneValue = phone.value.trim();

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!emailRegex.test(emailValue)) {
    setError(email, "Invalid email format");
  } else {
    setSuccess(email);
  }

  // Password validation
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (!passwordRegex.test(passwordValue)) {
    setError(password, "Min 6 chars, letters & numbers");
  } else {
    setSuccess(password);
  }

  // Phone validation
  const phoneRegex = /^[6-9]\d{9}$/;
  if (phoneValue === "") {
    setError(phone, "Phone number is required");
  } else if (!phoneRegex.test(phoneValue)) {
    setError(phone, "Invalid phone number");
  } else {
    setSuccess(phone);
  }
}
