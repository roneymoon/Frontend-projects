// variables

let quote = document.querySelector(".quote");
let person = document.querySelector(".person");
let newquote = document.querySelector(".new-quote");

const quotes = [
    {
      quote: "Creativity is intelligence having fun.",
      person: "- Albert Einstein"
    },
    {
      quote: "The only way to do great work is to love what you do.",
      person: "- Steve Jobs"
    },
    {
      quote: "Simplicity is the ultimate sophistication.",
      person: "- Leonardo da Vinci"
    },
    {
      quote: "Believe you can and you're halfway there.",
      person: "- Theodore Roosevelt"
    },
    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
      person: "- Franklin D. Roosevelt"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      person: "- Winston Churchill"
    },
    {
      quote: "The best way to predict the future is to create it.",
      person: "- Peter Drucker"
    },
    {
      quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      person: "- Martin Luther King Jr."
    },
    {
      quote: "Change the world by being yourself.",
      person: "- Amy Poehler"
    },
    {
      quote: "Life is really simple, but we insist on making it complicated.",
      person: "- Confucius"
    }
  ];
  
  
newquote.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})

window.addEventListener("resize", () => {
    if (window.innerWidth < 600) {
      window.resizeTo(600, window.innerHeight);
    }
  });