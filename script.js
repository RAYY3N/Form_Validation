const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  validateName();
  validateEmail();
  validatePhone();
}

function validateName() {
  const name = nameInput.value.trim();
  const errorMessage = nameInput.nextElementSibling;

  if (name === '') {
    errorMessage.textContent = 'Kailangan ang pangalan';
  } else {
    errorMessage.textContent = '';
  }
}

function validateEmail() {
  const email = emailInput.value.trim();
  const errorMessage = emailInput.nextElementSibling;

  if (email === '') {
    errorMessage.textContent = 'Email ay kailangan.';
  } else if (!isValidEmail(email)) {
    errorMessage.textContent = 'Mali ang pormat ng email.';
  } else {
    errorMessage.textContent = '';
  }
}

function validatePhone() {
  const phone = phoneInput.value.trim();
  const errorMessage = phoneInput.nextElementSibling;

  if (phone === '') {
    errorMessage.textContent = 'Numero ng iyong telepono ay kailangan.';
  } else if (!isValidPhone(phone)) {
    errorMessage.textContent = 'Numero ng telepono ay nasa maling pormat.';
  } else {
    errorMessage.textContent = '';
  }
}

function isValidEmail(email) {
  // Simple email validation regex pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function isValidPhone(phone) {
  // Simple phone number validation regex pattern
  const phonePattern = /^\d{10}$/;
  return phonePattern.test(phone);
}

function promptMe(){
  alert ("Registration form submitted!");
}