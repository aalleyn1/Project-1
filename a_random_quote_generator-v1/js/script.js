//An array of 8 quote objects
const quotes = [
  {
    quote:
      "Define success on your own terms, achieve it by your own rules, and build a life you're proud to live.",
    source: "Anne Sweeney (President of Walt Disney)"
  },
  {
    quote: "Do one thing everyday that scares you",
    source: "Eleanor Roosevelt"
  },
  {
    quote:
      "Everytime you smile at someone, it is an action of love, a gift to that person, a beautiful thing.",
    source: "Mother Teresa"
  },
  {
    quote: "You don't have to live forever, you just have to live",
    source: "Natalie Babbitt",
    citation: "Book",
    year: 2007
  },
  {
    quote: "Change the world by being yourself",
    source: "Amy Poehler"
  },
  {
    quote:
      "I think beauty comes from within. If you're happy and look at life in the best way you can, even when there are problems, it can make you beautiful on the outside.",
    source: "Faith Hill"
  },
  {
    quote: "Everything you can imagine is real",
    source: "Pablo Picasso"
  },
  {
    quote: "Not all those who wonder are lost",
    source: "J.R.R Tolkien",
    citation: "book",
    year: 1954
  }
];

//Logs the quotes array to the console
console.log(quotes);

//returns a random quote from the quote array
function getRandomQuote() {
  let randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];
}

//Prints random quote to the page
function printQuote() {
  let result = getRandomQuote();
  let message = " ";

  message +=
    "<p class='quote'>" +
    result.quote +
    "</p> <p class='source'>" +
    result.source +
    " ";

  if (result.citation) {
    message += "<span class='citation'>" + result.citation + "</span>";
  }
  if (result.year) {
    message += "<span class='year'>" + result.year + "</span>" + "</p>";
  }

  message += "</p>";

  document.getElementById("quote-box").innerHTML = message;
}

//Quotes randomly change after 3 seconds
function autoTimer() {
  setInterval(printQuote, 3000);
}

autoTimer();

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered the `printQuote` function. 
***/

document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);
