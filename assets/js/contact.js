function validateForm(event) {
    event.preventDefault(); // Prevent form submission
  
    // Clear previous error messages
    clearErrors();
  
    // Validate name field
    const nameInput = document.getElementById('name');
    if (!nameInput.value.trim()) {
      displayError(nameInput, 'Name is required.');
      return;
    }
  
    // Validate email field
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();
    if (!email) {
      displayError(emailInput, 'Email is required.');
      return;
    }
    if (!validateEmail(email)) {
      displayError(emailInput, 'Please enter a valid email address.');
      return;
    }
  
    // Validate query field
    const queryInput = document.getElementById('query');
    if (!queryInput.value.trim()) {
      displayError(queryInput, 'Query is required.');
      return;
    }
  
    // If all fields are valid, you can proceed with form submission
    document.getElementById('contactForm').submit();
  }
  
  