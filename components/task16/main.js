// variables,
const quoteTextEl = document.querySelector('.quote-content h1');
const quoteAuthorEl = document.querySelector('.quote-content h3');
const quoteMessageEl = document.querySelector('.quote-content p');
const quoteBtnEl = document.querySelector('.quote-content button');

const quoteGeneratorHandle = async () => {
    try {
        quoteTextEl.style.display = 'none';
        quoteAuthorEl.style.display = 'none';
        quoteMessageEl.style.display = 'block';

        // authentication for the API key,
        const API_KEY = 'x2glLQIZ5w8x4po3i4eNk7tFvXsFEwZVHvgZwhB0';
        const url = 'https://api.api-ninjas.com/v2/randomquotes?categories=success,wisdom';
        const options = {
            method: 'GET',
            headers: { 'X-Api-Key': API_KEY },
            contentType: 'application/json',
            data: { categories: 'success,wisdom' },
        };

        let res = await fetch(url, options);
        let data = await res.json();

        // change the text contents,
        quoteTextEl.textContent = data[0].quote;
        quoteAuthorEl.textContent = data[0].author !== "" ? `- ${data[0].author}` : "";
    } catch (error) {
        console.log('Error in fetching quotes from API', error);
    } finally {
        quoteMessageEl.style.display = 'none';
        quoteAuthorEl.style.display = 'block';
        quoteTextEl.style.display = 'block';
    }
};

quoteBtnEl.addEventListener('click', quoteGeneratorHandle);
window.addEventListener('load', quoteGeneratorHandle);