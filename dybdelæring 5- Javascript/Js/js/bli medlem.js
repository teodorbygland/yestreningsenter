document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('signup-form');
  form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (validateForm()) {
          // Send data to server
          console.log('Form submitted successfully');
          form.reset();
      }
  });

  function validateForm() {
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const errorElement = document.getElementById('error-message');
      errorElement.innerHTML = '';

      let isValid = true;

      if (username.trim() === '') {
          showError('Username is required');
          isValid = false;
      }

      if (email.trim() === '') {
          showError('Email is required');
          isValid = false;
      } else if (!isValidEmail(email)) {
          showError('Invalid email address');
          isValid = false;
      }

      if (password.trim() === '') {
          showError('Password is required');
          isValid = false;
      } else if (password.length < 6) {
          showError('Password must be at least 6 characters long');
          isValid = false;
      }

      return isValid;
  }

  function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }

  function showError(message) {
      const errorElement = document.getElementById('error-message');
      const errorMessage = document.createElement('div');
      errorMessage.classList.add('error');
      errorMessage.innerText = message;
      errorElement.appendChild(errorMessage);
  }

  const formInputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');
  formInputs.forEach(function(input) {
      input.addEventListener('input', function() {
          clearError();
      });
  });

  function clearError() {
      const errorElement = document.getElementById('error-message');
      errorElement.innerHTML = '';
  }
});
