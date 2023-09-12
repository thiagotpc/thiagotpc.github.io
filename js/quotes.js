quotes = [{
    "text": "Imagination is more important than knowledge.",
    "author": "Albert Einstein"
},
{
    "text": "Peace cannot be kept by force. It can only be achieved by understanding.",
    "author": "Albert Einstein"
},
{
    "text": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "author": "Albert Einstein"
},{
    "text": "Reality is merely an illusion, albeit a very persistent one.",
    "author": "Albert Einstein"
},
{
    "text": "I am convinced that He (God) does not play dice.",
    "author": "Albert Einstein"
},
{
    "text": "Anyone who has never made a mistake has never tried anything new.",
    "author": "Albert Einstein"
},
{
    "text": "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    "author": "Albert Einstein"
},
{
    "text": "Believe you can and you're halfway there.",
    "author": "Theodore Roosevelt"
}
];

function getQuote() {
    quote = quotes[(Math.floor(Math.random() * quotes.length))];
    return quote;
}

function printQuote() {
    var quote = getQuote();
    const template = `
        <p>${quote.text}</p>
        <cite>${quote.author}</cite>
    `;
    document.write(template);
}