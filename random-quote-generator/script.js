const quotes = [
  {
    quote: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    quote: "Don’t let yesterday take up too much of today.",
    author: "Will Rogers"
  },
  {
    quote: "You learn more from failure than from success.",
    author: "Unknown"
  },
  {
    quote: "Dream big and dare to fail.",
    author: "Norman Vaughan"
  }
];

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const button = document.getElementById("new-quote");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = `"${quotes[randomIndex].quote}"`;
  authorText.textContent = `— ${quotes[randomIndex].author}`;
});
