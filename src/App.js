import React,{ useEffect, useState }  from "react";

import "./App.css";
import colors from './color'

let quoteDB = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

function App() {
  const [quote, setQuote] = useState("If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.");
  const [author, setAuthor] = useState('Oprah Winfrey');
  const [randomNumber, setRandomNumber] = useState(0);
  const [quotes, setQuotes] = useState(null)

  const [accentColor, setAccentColor] = useState('#73A857')


  const fetchQuotes = async (url) => {
    const response = await fetch(url)
    const parsedJSON = await response.json()
    setQuotes(parsedJSON.quotes)
    console.log(parsedJSON)
  }

  useEffect(() => {
   fetchQuotes(quoteDB)
  }, [quoteDB])

  const getRandomQuote = () => {
    let randomInterger = Math.floor(quotes.length*Math.random())
    let randomColor = Math.floor(colors.length*Math.random())
    setRandomNumber(randomInterger)
    setAccentColor(colors[randomColor])
    setQuote(quotes[randomInterger].quote)
    setAuthor(quotes[randomInterger].author)
  }

    return (
      <div className="app" style={{backgroundColor:accentColor, color: accentColor}}> 
        <header className="app-header"><i class="fas fa-quote-left"></i>quotes<i class="fas fa-quote-right"></i></header>
        <div className="card">
         
          <h1 className="heading"> <i class="fas fa-quote-left"></i>{quote}</h1>
          <p id="author">- {author}</p>
          <button className="buttons" id="new-quote" onClick={() => getRandomQuote()} style={{backgroundColor:accentColor}}>
            New Quote
          </button>
        </div>
          <p id="footer">created by <b>nshchy</b></p>
    
        
      </div>
    );
  
}

export default App;
