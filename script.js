const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  let valid = true;

  // Name validation
  const name = document.getElementById('name').value.trim();
  if (name.length < 3) {
    document.getElementById('nameError').textContent = "Name must be at least 3 characters.";
    valid = false;
  } else {
    document.getElementById('nameError').textContent = "";
  }

  // Email validation
  const email = document.getElementById('email').value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent = "Enter a valid email address.";
    valid = false;
  } else {
    document.getElementById('emailError').textContent = "";
  }

  // Phone validation
  const phone = document.getElementById('phone').value.trim();
  const phonePattern = /^[0-9]{10}$/;  // Exactly 10 digits only

  if (phone === "") {
    document.getElementById('phoneError').textContent = "Please enter your phone number.";
    valid = false;

  } else if (!phonePattern.test(phone)) {
    document.getElementById('phoneError').textContent = "Phone number must be 10 digits (numbers only).";
    valid = false;

  } else {
    document.getElementById('phoneError').textContent = "";
  }

  // Message validation
  const message = document.getElementById('message').value.trim();
  if (message.length < 10) {
    document.getElementById('messageError').textContent = "Message must be at least 10 characters.";
    valid = false;
  } else {
    document.getElementById('messageError').textContent = "";
  }

  if (valid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});
