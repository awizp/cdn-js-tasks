const themeBtn = document.getElementById('theme-button');
const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');

const darkLogo = document.getElementById('logo-dark');
const whiteLogo = document.getElementById('logo-white');

// toggle dark theme,
themeBtn.addEventListener('click', () => {
    let documentEls = document.documentElement;

    // checking the all document elements contain dark classlist,
    if (!documentEls.classList.contains('dark')) {
        // adding dark class and hiding sun icon,
        documentEls.classList.add('dark');
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
        whiteLogo.style.display = 'none';
        darkLogo.style.display = 'block';
        localStorage.theme = "dark";
        localStorage.setItem('logo', 'white');
    } else {
        // remove dark class and hiding moon icon,
        documentEls.classList.remove('dark');
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
        darkLogo.style.display = 'none';
        whiteLogo.style.display = 'block';
        localStorage.theme = "light";
        localStorage.setItem('logo', 'dark');
    }
});

window.addEventListener('load', () => {
    document.documentElement.classList.toggle(
        "dark",
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
    );

    let logoTheme = localStorage.getItem('logo');

    if (logoTheme === 'dark') {
        darkLogo.style.display = 'block';
        whiteLogo.style.display = 'none';
    }

    if (logoTheme === 'white') {
        darkLogo.style.display = 'block';
        whiteLogo.style.display = 'none';
    }
});