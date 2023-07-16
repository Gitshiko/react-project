import {useState} from 'react';
import "./counter.css"


//counter component - all react components are capitalized

//different way of declaring a function
function Counter() {
     //initialize the state variable called counter 
    const [counter, setCounter] = useState(0);
    const increaseCount = () => {
        setCounter(counter + 1);
    }
    const decreaseCount = () => {
        setCounter(counter - 1);
    }
    const multiplyBy2 = () => {
        setCounter(counter*2);
    }
    const divideBy2 = () => {
        setCounter(counter/2);
    }
    const reset = () => {
        setCounter(0);
    }
    

    return(
        <div className='counter'>
            {counter}
            <button onClick={increaseCount}>Increase</button>            
            <button onClick={decreaseCount}>Decrease</button>                       
            <button onClick={multiplyBy2}>Double</button>
            <button onClick={divideBy2}>Halve</button>            
            <button onClick={reset}>Reset</button>            
        </div>

    )

}

export default Counter;