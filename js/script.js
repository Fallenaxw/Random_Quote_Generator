// FSJS - Random Quote Generator


//Creates an array of quote objects
const quotes = [
  {quote: "No one in the brief history of computing has ever written a piece of perfect software. It's unlikely that you'll be the first.",
  source: `Andy Hunt`,
  citation: `The Pragmatic Programmer`,
  year:  `1999`,
  tag: `Motivational`

},

  {quote: `In three words I can sum up everything I've learned about life: It goes on.`,
    source: `Robert Frost`,
    citation: `This Week Magazine`,
    year: `1954`
  },

  {quote: `They may forget what you said — but they will never forget how you made them feel.`,
    source: `Carl W. Buehner`,
    citation: `Richard Evans’ Quote Book`,
    year: `1971`,
    tag: `Motivational`

  },

  {quote: `We are an impossibility in an impossible universe.`,
    source: `Ray Bradbury`,
    citation: `Assignment America`,
    year: `1975`
  },

  {quote: `We accept the love we think we deserve. `,
    source: `Stephen Chbosky`,
    citation: `The Perks of Being a Wallflower`,
    year: `1999`
  }

];


// Creates a function that generates a random quote object
function getRandomQuote (array ) {
    let quoteNum = Math.floor( Math.random() * quotes.length  );
    let ranQuote = quotes[quoteNum];
    return ranQuote;
}
//Creates a function that generates a random color background
function backgroundColor (){
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  color = `rgb(${r},${g},${b})`;
  body.style.backgroundColor = color;

}
/*Creates a function that takes a random quote and adds it to an html string
based on properties of the array*/

function printQuote ( ) {
  let box = getRandomQuote(quotes);
  let message = `<p class="quote"> ${box.quote} </p>
<p class="source"> ${box.source}`
if (box.citation) {
  message +=  `<span class="citation"> ${box.citation} </span>`
}
if (box.year) {
  message += `<span class="year"> ${box.year} </span>`
}
if (box.tag) {
  message += `<span class="tag">${box.tag}</span>`
}
message += `</p>`;
document.getElementById('quote-box').innerHTML = message;
}

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//This event listener creates a random color background when clicking "Show another quote"
document.getElementById('loadQuote').addEventListener("click", backgroundColor,false);

//This code sets up the 30 second time interval between each quote
var intervalID = window.setInterval(printQuote, 30000);
var intervalID = window.setInterval(backgroundColor, 30000);
