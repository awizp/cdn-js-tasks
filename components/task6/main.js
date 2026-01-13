// elements variables
let navigationLinksEls = document.querySelectorAll(".navigation_links");

// loop through navigation elements to add active class,
navigationLinksEls.forEach((navEl) => {
    navEl.addEventListener('click', () => {

        // removing active class to all navigation links,
        navigationLinksEls.forEach((item) => {
            if (item.classList.contains('active-link')) {
                item.classList.remove('active-link');
            }
        });

        // adding active class to clicking navigation link,
        navEl.classList.add('active-link');
    });
});