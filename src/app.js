// src/app.js
// Ensure DOMPurify is loaded
// Use DOMPurify to sanitize user input and safely inject it into the DOM

function displayInput() {
    const userText = document.getElementById('user-text').value;
    
    // Sanitize the input to remove any potential XSS risks
    const sanitizedInput = DOMPurify.sanitize(userText);
  
    // Display sanitized input
    document.getElementById('user-input').innerHTML = sanitizedInput;
  }
  