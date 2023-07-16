import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Counter from './components/counter'; 
import Quotes from './components/quotes';
import { colours } from './components/counter/colours';



function App() {
//this is to respond to what's happening at UI
//our component is going to display a welcome message
//then we are going to update the message by clicking a button

  console.log(useState()); //this shows an array of 2 elements: 1 undefined, the other, a function

  //initialize state - sets up the state variable and function to update it
  //array destructuring
  //message below is a state variable
  const[message, setMessage] =useState('This works with two update buttons');
  //const[date, setDate] =useState('');

  const[messageShowing, setMessageShowing] =useState(true);
  const[messageisShowing, setMessageisShowing] =useState(true);
  const[counter, setCounter] = useState(0);

  function updateMessage(){
    setMessage('New Message');
  }

  function toggleMessage(){
    setMessageShowing(!messageShowing);
  }

  function toggleMessage2(){
    setMessageisShowing(!messageisShowing);
  }



  function count(){
    setCounter(counter + 1);
    
  }
  
  return (
    <div className="App">
      <h1>Working with State</h1>
      {message}
      <br/> <br/>
      
      <div>
        <button onClick={() => setMessage('New Message')}>Update Message</button>
        <button onClick={updateMessage}>Second Update Message</button>
      </div>
      <br/> <br/>

      {
        messageShowing === true ?
        <div>Welcome to the App</div> :
        ""
      }
      <br/>
      <button onClick={toggleMessage}>{messageShowing ? 'Hide' : 'Show' }</button>
      <br/><br/><br/>
      

      <div className='buttonContainer'>     
      { 
      messageisShowing  ?
      <button className="btn btn--on" onClick={toggleMessage2}>
      <div></div>
      </button>
      :
      <button className="btn btn--off" onClick={toggleMessage2}>
      <div></div>
      </button>
      }
      </div>
      <br/>
      {
      messageisShowing ?
      <div>Welcome to the toggle button</div>
      :
      ""
      }

      <br/><br/>
      <div className='counterTask'>
        <div>Current count is {counter}     
        </div>

        <br/>
        <button className="count-button" style={{backgroundColor: colours[counter]}} onClick={count}> Click to count</button>
      </div>
      <br></br>
      <Counter />  

      <footer>
        <Quotes/>
      </footer>
      
           
    </div>
  );
}

export default App;
