// Toggle Background Color
const toggleBgBtn = document.getElementById('toggleBgBtn');
toggleBgBtn.onclick = () => {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'lightblue' ? 'lightgreen' : 'lightblue';
};

// Slider for Text Size
const textSizeSlider = document.getElementById('textSizeSlider');
const sliderValue = document.getElementById('sliderValue');
textSizeSlider.oninput = () => {
    const fontSize = textSizeSlider.value + 'px';
    document.body.style.fontSize = fontSize;
    sliderValue.textContent = fontSize;
};

// Modal with Event Listeners
const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModalBtn');
openModalBtn.onclick = () => {
    modal.style.display = 'block';
};
closeModalBtn.onclick = () => {
    modal.style.display = 'none';
};

// Form Validation
const form = document.getElementById('validationForm');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

form.onsubmit = (event) => {
    let valid = true;
    // Name Validation
    if (nameField.value.length < 3) {
        nameError.textContent = 'Name must be at least 3 characters long.';
        valid = false;
    } else {
        nameError.textContent = '';
    }

    // Email Validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(emailField.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        valid = false;
    } else {
        emailError.textContent = '';
    }

    // Password Validation
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordPattern.test(passwordField.value)) {
        passwordError.textContent = 'Password must be at least 8 characters, including 1 uppercase letter and 1 number.';
        valid = false;
    } else {
        passwordError.textContent = '';
    }

    if (!valid) {
        event.preventDefault();  // Prevent form submission if validation fails
    }
};

// Dropdown Menu
const dropdown = document.getElementById('dropdown');
const dropdownMessage = document.getElementById('dropdownMessage');
dropdown.onchange = () => {
    const selectedOption = dropdown.value;
    if (selectedOption) {
        dropdownMessage.textContent = `You selected: ${selectedOption}`;
    } else {
        dropdownMessage.textContent = '';
    }
};
