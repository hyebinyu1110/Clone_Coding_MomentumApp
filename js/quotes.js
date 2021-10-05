const quotes = [
    {
      quote: "생생하게(vivid) 꿈꾸면(dream) 이루어진다(realization)",
      author: " - 이지성",
    },
    {
      quote: "생각과 행동과의 간격이 성장 속도를 결정한다.",
      author: " - 정회일",
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
      quote: "Travel expands the mind and fills the gap.",
      author: " - Sheda Savage",
    },
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;