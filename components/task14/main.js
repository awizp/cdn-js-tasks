// variables,
const accordianContainers = document.querySelectorAll(".accordian-container");
const accordianAnswers = document.querySelectorAll(".accordian-answer");

const accordianHandle = (accordianItem) => {
    let childAnswer = accordianItem.querySelector('.accordian-answer');

    // always close other conainer when another one opens,
    accordianAnswers.forEach((accordianContent) => {
        if (accordianContent.id !== childAnswer.id) {
            accordianContent.classList.remove('active');
        }
    });

    if (childAnswer.classList.contains('active')) {
        childAnswer.classList.remove('active');
    } else {
        childAnswer.classList.add('active');
    }
};

// adding event listener,
accordianContainers.forEach((item) => {
    item.addEventListener('click', () => accordianHandle(item));
});
