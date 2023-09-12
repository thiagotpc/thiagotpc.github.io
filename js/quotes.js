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