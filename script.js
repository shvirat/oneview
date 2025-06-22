// Get the input element and button
const rollNumberInput = document.querySelector('.no-spinner');
const continueButton = document.querySelector('.btn-sub');
const errorMessage = document.getElementById('error-message');
const placeholderText = 'Roll number';

// Hide placeholder on focus, show on blur if empty
rollNumberInput.addEventListener('focus', function() {
    this.placeholder = '';
});
rollNumberInput.addEventListener('blur', function() {
    if (!this.value) {
        this.placeholder = placeholderText;
    }
});

// Remove error message when user starts typing
rollNumberInput.addEventListener('input', function() {
    errorMessage.textContent = '';
    if (this.value.length > 13) {
        this.value = this.value.slice(0, 13);
    }
});

continueButton.addEventListener('click', function() {
    const rollNumber = rollNumberInput.value;
    
    // Check if the input is correct or not
    if (rollNumber.length === 13) {
        errorMessage.textContent = '';
        window.location.href = 'https://youtube.com/shorts/AITn2AJolIQ?si=yNvbk2n_8MyvS4tX';
    } else {
        errorMessage.textContent = 'Invalid roll number';
    }
});

// Prevent non-numeric input
rollNumberInput.addEventListener('keypress', function(e) {
    if (e.key < '0' || e.key > '9') {
        e.preventDefault();
    }
});