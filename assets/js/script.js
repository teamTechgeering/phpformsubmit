const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  let valid = true;

 
    //  NAME VALIDATION

  const name = document.getElementById('name').value.trim();
  const nameError = document.getElementById('nameError');

  if (name.length < 3) {
    nameError.textContent = "Name must be at least 3 characters.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  
    //  EMAIL VALIDATION
  const email = document.getElementById('email').value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent = "Enter a valid email address.";
    valid = false;
  } else {
    document.getElementById('emailError').textContent = "";
  }

  
    //  PHONE VALIDATION
  const phone = document.getElementById('phone').value.trim();
  const phoneError = document.getElementById('phoneError');
  const phonePattern = /^[0-9]{10}$/;

  if (!phonePattern.test(phone)) {
    phoneError.textContent = "Phone must be 10 digits (numbers only).";
    valid = false;
  } else {
    phoneError.textContent = "";
  }

    //  MESSAGE VALIDATION
  
  const message = document.getElementById('message').value.trim();
  if (message.length < 10) {
    document.getElementById('messageError').textContent = "Message must be at least 10 characters.";
    valid = false;
  } else {
    document.getElementById('messageError').textContent = "";
  }

  
    //  SUBMIT IF VALID
  
  if (valid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});


// NAME → allow only letters and spaces
document.getElementById("name").addEventListener("input", function () {
  this.value = this.value.replace(/[^A-Za-z ]/g, "");
});

// PHONE → allow only digits (no letters, no symbols)
document.getElementById("phone").addEventListener("input", function () {
  this.value = this.value.replace(/[^0-9]/g, "");
});
