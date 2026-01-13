const fullNameEl = document.querySelector('#fullname');
const emailEl = document.querySelector('#email');
const ageEl = document.querySelector('#age');
const formEl = document.querySelector('#myForm');
const successEl = document.querySelector('#success-message');


const detailEl = document.querySelector('#detailsEl');
const detailName = document.querySelector('.detail-name');
const detailEmail = document.querySelector('.detail-email');
const detailAge = document.querySelector('.detail-age');

formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    let fullName = fullNameEl.value;
    let email = emailEl.value;
    let age = ageEl.value;

    if (fullName === '' && email === "" && age === '') {
        alert("Enter valid values at corresponding inputs!");
    }

    successEl.style.display = 'flex';

    detailName.innerHTML = 'Your Name is, ' + fullName;
    detailEmail.innerHTML = 'Your Email is, ' + email;
    detailAge.innerHTML = 'Your Age is, ' + age;

    detailEl.style.display = 'flex';
});