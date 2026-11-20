const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = [];

    // Name Validation
    if (nameInput.value.trim() === '') {
        messages.push('Name is required');
    }

    // Email Validation
    if (!emailInput.value.includes('@')) {
        messages.push('Valid email is required');
    }

    // Rating Validation
    const selectedRating = document.querySelector(
        'input[name="rating"]:checked'
    );

    if (!selectedRating) {
        messages.push('Please select a rating');
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    }
});