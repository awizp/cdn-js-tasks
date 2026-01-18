// form input fields,
const fullnameInputEl = document.getElementById('fullname-input');
const passwordInputEl = document.getElementById('password-input');
const confirmPassInputEl = document.getElementById('confirmpass-input');

// input errors,
const fullnameErrorEl = document.getElementById('fullname-error');
const passwordErrorEl = document.getElementById('password-error');
const confirmPassErrorEl = document.getElementById('confirmpass-error');

//icons
const openEyeIcon = document.getElementById("openEye-icon");
const closeEyeIcon = document.getElementById("closeEye-icon");

// buttons,
const submitBtn = document.getElementById('submit-btn');
const visibleBtn = document.getElementById('visible-btn');

//result,
const resultContainer = document.getElementById('result-container');

// validation for fullname,
const fullnameValidation = (nameRegEx) => {
    if (fullnameInputEl.value === '') {
        fullnameErrorEl.textContent = '* Enter a valid fullname';
        fullnameErrorEl.style.display = 'block';
        return;
    }

    if (fullnameInputEl.value.length < 3) {
        fullnameErrorEl.textContent = '* Fullname must be more than three letters';
        fullnameErrorEl.style.display = 'block';
        return;
    }

    if (!nameRegEx.test(fullnameInputEl.value)) {
        fullnameErrorEl.textContent = '* Enter a valid fullname';
        fullnameErrorEl.style.display = 'block';
        return;
    }

    return true;
};

// validation for password,
const passwordValidation = (passwordRegEx) => {
    if (passwordInputEl.value === '') {
        passwordErrorEl.textContent = '* Enter a valid password';
        passwordErrorEl.style.display = 'block';
        return;
    }

    if (passwordInputEl.value.length < 8) {
        passwordErrorEl.textContent = '* Password must be more than 8 letters';
        passwordErrorEl.style.display = 'block';
        return;
    }

    if (!passwordRegEx.test(passwordInputEl.value)) {
        passwordErrorEl.textContent = '* Enter a valid password';
        passwordErrorEl.style.display = 'block';
        return;
    }

    return true;
};

// confirm password validation,
const confirmPassValidation = () => {
    if (confirmPassInputEl.value === '') {
        confirmPassErrorEl.textContent = '* Enter a valid confirm password';
        confirmPassErrorEl.style.display = 'block';
        return;
    }

    if (confirmPassInputEl.value !== passwordInputEl.value) {
        confirmPassErrorEl.textContent = '* Confirm password should be same as password';
        confirmPassErrorEl.style.display = 'block';
        return;
    }

    return true;
};

// password show and hide,
visibleBtn.addEventListener('click', () => {
    let passwordType = passwordInputEl.getAttribute('type');

    if (passwordType === 'password') {
        passwordInputEl.setAttribute('type', 'text');
        openEyeIcon.style.display = 'block';
        closeEyeIcon.style.display = 'none';
    } else {
        passwordInputEl.setAttribute('type', 'password');
        openEyeIcon.style.display = 'none';
        closeEyeIcon.style.display = 'block';
    }
});

// submitting form,
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    fullnameErrorEl.style.display = 'none';
    passwordErrorEl.style.display = 'none';
    confirmPassErrorEl.style.display = 'none';
    resultContainer.style.display = 'none';

    let nameRegEx = /^[a-zA-Z\s]+$/;
    let passwordRegEx = /^(?=.*[a-z])[A-Za-z\d@$!%*?&]{8,}$/;

    // gets a true value from each function,
    const fullnameTrue = fullnameValidation(nameRegEx);
    const passwordTrue = passwordValidation(passwordRegEx);
    const confirmPassTrue = confirmPassValidation();

    if (fullnameTrue && passwordTrue && confirmPassTrue) {
        resultContainer.textContent = `Signed in! Welcome to CyberDude, Mr. ${fullnameInputEl.value} ✨`;
        resultContainer.style.display = 'block';

        setTimeout(() => {
            resultContainer.style.display = 'none';
        }, 5000);
    }
});