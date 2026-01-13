// colors in array,
const colorArr = [
    {
        id: 1,
        color: "Red",
        code: "#FA5C5C"
    },
    {
        id: 2,
        color: "Yellow",
        code: "#FFD41D"
    },
    {
        id: 3,
        color: "Blue",
        code: "#360185"
    },
    {
        id: 4,
        color: "Purple",
        code: "#8F0177"
    },
    {
        id: 5,
        color: "Orange",
        code: "#FF6C0C"
    }
];

// elements variables
let sunIcon = document.getElementById('sun-icon');
let moonIcon = document.getElementById('moon-icon');
let themeBtn = document.getElementById('theme-button');
let randomBtn = document.getElementById('random-btn');

let body = document.body;
let buttonContainerEl = document.getElementById('button-container');
let fragmentEl = document.createDocumentFragment();


// toggle dark theme,
themeBtn.addEventListener('click', () => {
    let documentEls = document.documentElement;

    // checking the all document elements contain dark classlist,
    if (!documentEls.classList.contains('dark')) {
        // adding dark class and hiding sun icon,
        documentEls.classList.add('dark');
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    } else {
        // remove dark class and hiding moon icon,
        documentEls.classList.remove('dark');
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    }
});

// get all buttons,
const getButtonFunc = () => {
    for (let i = 0; i < colorArr.length; i++) {
        // creating button element and append to fragment element,
        let buttonEl = document.createElement('button');
        buttonEl.classList.add('btn-style');
        buttonEl.style.color = '#FFF';
        buttonEl.textContent = colorArr[i].color;
        buttonEl.style.background = colorArr[i].code;
        fragmentEl.append(buttonEl);

        // adding click event to each buttons,
        buttonEl.addEventListener('click', () => (body.style.background = colorArr[i].code));
    }

    buttonContainerEl.append(fragmentEl);
};

getButtonFunc();

// get random color,
randomBtn.addEventListener('click', () => {
    const randomColorFunc = () => {
        let letters = 'ABCDEF1234567890';
        let color = '#';

        // looping to get color code,
        for (let j = 0; j < 6; j++) {
            let colorCode = letters[Math.floor(Math.random() * 16)];
            color += colorCode;
        }

        return color;
    };

    body.style.background = randomColorFunc();
});