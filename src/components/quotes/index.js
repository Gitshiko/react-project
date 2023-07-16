
import {useState} from 'react';

function Quotes(){
    //initialize state to store the quote
    const [quote, setQuote] = useState(null)
    function getQuote(){
        //make fetch request to api, return if successful
       
        //store returned qupte in the variable
        fetch('https://type.fit/api/quotes')
            .then(res => res.json())
            .then(data => {
                console.log(data[0]);
                const randomNumber = Math.floor(Math.random() * data.length);
                setQuote(data[randomNumber]);                    
            });

    }

    return (

        <div className="quotes">
            {
                quote && //same as quote !== null | quote !== undefined
                <p>
                    <b><i>{quote.text}</i></b>
                    <br/> 
                    <span>- {quote.author}</span>
                </p>
            }
            <button onClick={getQuote}>Get Quote</button>
        </div>

    )
}

export default Quotes;