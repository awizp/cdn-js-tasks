// elements variables
let headingEl = document.getElementById("heading");
let inputEl = document.querySelector("#fullName");
let buttonEl = document.getElementById("btn");
let refreshBtnEl = document.getElementById("refreshBtn");
let errorEl = document.getElementById("errorMessage");

let inputContainer = document.getElementById("input-container");
let bodyEl = document.body;


refreshBtnEl.addEventListener('click', () => {
    window.location.reload();
});

buttonEl.addEventListener('click', () => {

    // name validation by regular expression,
    let regEx = /^[a-zA-Z]+$/;

    if (regEx.test(inputEl.value)) {
        errorEl.style.display = "none";

        // input value,
        let value = inputEl.value;

        // setting color values to the elements,
        headingEl.innerHTML = `Hello ${value}, Welcome to CyberDude Networks!`;
        headingEl.style.textTransform = 'Capitalize';
        headingEl.style.display = 'block';

        // hiding input container,
        inputContainer.style.display = 'none';

        // showing refresh btn,
        refreshBtnEl.style.display = 'block';

        inputEl.value = "";
    } else {
        errorEl.style.display = "block";
        inputContainer.style.display = 'block';
        headingEl.style.display = 'none';
        refreshBtnEl.style.display = 'none';
    }
});