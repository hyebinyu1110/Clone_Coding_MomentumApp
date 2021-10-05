const quotes = [
    {
      quote: "vivid dream equals to realization",
      author: " - Ji-Seong Lee",
    },

    { quote: "The gap between your thoughts and practice will decide your growth speed",
    author: "Hoi-Il Jeong", 
    },

    {
      quote:
        "The world is a book and those who do not travel read only one page.",
      author: " - Saint Augustine",
    },
    {
      quote: "Life is either a daring adventure or nothing at all.",
      author: " - Helen Keller",
    },
    {
      quote: "To Travel is to Live",
      author: " - Hans Christian Andersen",
    },
    {
      quote: "Only a life lived for others is a life worthwhile.",
      author: " - Albert Einstein",
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: " - Mae West",
    },
    {
      quote: "Never go on trips with anyone you do not love.",
      author: " - Hemmingway",
    },
    {
      quote: "We wander for distraction, but we travel for fulfilment.",
      author: " - Hilaire Belloc",
    },
    {
      quote: "Stay hungry, Stay foolish.",
      author: " - Steve Jobs",
    },
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;