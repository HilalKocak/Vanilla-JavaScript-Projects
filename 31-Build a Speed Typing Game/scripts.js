const RANDOM_QUOTE_API_URL = 'https://api.quotable.io/random';
const quoteDisplay = document.getElementById('quoteDisplay')
const quoteInput = document.querySelector('.quote-input')


quoteInput.addEventListener('input', ()=> {
    console.log('changed')
    const arrayQuote = quoteDisplay.querySelectorAll('span')
    const arrayValue = quoteInput.value.split('')

    let correct = true
    arrayQuote.forEach((characterSpan, index)=> {
        const character = arrayValue[index]
        if(character == null){ // user didnt type yet
            characterSpan.classList.remove('correct')
            characterSpan.classList.remove('incorrect')
            correct = false
        }else if(character === characterSpan.innerText) {
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
        }else{
            characterSpan.classList.remove('correct')
            characterSpan.classList.add('incorrect')
            correct = false
        }

    })

    if (correct) renderNewQuote()

})

function getRandomQuote(){
    return fetch(RANDOM_QUOTE_API_URL)
        .then(response => response.json())
        .then(data => data.content)
}

async function renderNewQuote(){
    const quote = await getRandomQuote()
    quoteDisplay.innerHTML = '';
    quoteInput.value = null;
    quote.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        quoteDisplay.appendChild(characterSpan)
    })
}

renderNewQuote()