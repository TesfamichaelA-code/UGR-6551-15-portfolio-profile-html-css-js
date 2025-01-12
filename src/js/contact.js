// Ensure the script is linked by testing with a console log
console.log("contact.js is loaded!");

// Add the form submission event listener
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Clear previous error messages
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(el => {
        el.style.display = 'none';
    });

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validation flags
    let isValid = true;

    // Name validation
    if (name === '') {
        const nameError = document.getElementById('nameError');
        nameError.textContent = 'Name is required';
        nameError.style.display = 'block';
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
        const emailError = document.getElementById('emailError');
        emailError.textContent = 'Valid email is required';
        emailError.style.display = 'block';
        isValid = false;
    }

    // Message validation
    if (message === '') {
        const messageError = document.getElementById('messageError');
        messageError.textContent = 'Message is required';
        messageError.style.display = 'block';
        isValid = false;
    }

    // If form is valid, simulate successful submission
    if (isValid) {
        alert('Form submitted successfully! Thank you for your message.');
        // Optionally, reset the form
        document.getElementById('contactForm').reset();
    }
});
