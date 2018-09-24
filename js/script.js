// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
const quotes = [
  {quote: "No one in the brief history of computing has ever written a piece of perfect software. It's unlikely that you'll be the first.",
  source: `Andy Hunt`,
  citation: `The Pragmatic Programmer`,
  year:  `1999`
},

  {quote: `In three words I can sum up everything I've learned about life: it goes on.`,
    source: `Robert Frost`,
    citation: `This Week Magazine`,
    year: `1954`
  },

  {quote: `They may forget what you said — but they will never forget how you made them feel.`,
    source: `Carl W. Buehner`,
    citation: `Richard Evans’ Quote Book`,
    year: `1971`
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

// Create the getRandomQuote function and name it getRandomQuote
function getRandomQuote (array ) {
    let quoteNum = Math.floor( Math.random() * quotes.length  );
    let ranQuote = quotes[quoteNum];
    return ranQuote;
}

// Create the printQuote funtion and name it printQuote

function printQuote ( ) {
  let box = getRandomQuote(quotes);
  let message = `<p class="quote"> ${box.quote} </p>
<p class="source"> ${box.source}
  <span class="citation"> ${box.citation} </span>
  <span class="year"> ${box.year} </span>
</p>`
document.getElementById('quote-box').innerHTML = message;
}

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
