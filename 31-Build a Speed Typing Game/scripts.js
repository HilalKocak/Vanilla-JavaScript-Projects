const RANDOM_QUOTE_API_URL = 'https://api.quotable.io/random';

function getRandomQuote(){
    return fetch(RANDOM_QUOTE_API_URL)
        .then(response => response.json())
        .then(data => data.content)
}

async function renderNewQuote(){
    const quote = await getRandomQuote()
    console.log(quote)
}

renderNewQuote()