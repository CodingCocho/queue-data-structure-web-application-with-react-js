import './App.css';
import Queue from './Queue'
import { useState, useEffect } from "react";

/*
This React.js App will run the frontend of the Queue data structure.
*/
function App() {
  
  // Holds our useStates
  // An useState for the Queue to keep track of the data structure 
  const [queue, setQueue] = useState(new Queue(5))
  // An useState for the pointer to keep track of when the page needs to render
  const [pointer, setPointer] = useState(queue.getPointer())

  // An useEffect the notifies the console of a render which is depended on the 
  // pointer changing
  useEffect(() => {
    console.log("render");
  }, [pointer])
  
  // Local function to set the new Queue 
  const newQueue = () =>
  {
    setQueue(new Queue(5));
  }

  // Local function to enqueue an element into the Queue
  const enqueueQueue = () =>
  {
    // Prompt the user for the element
    const element = prompt("Enter an element to enqueue into the Queue", 0)
    // Call the Queue enqueue method
    queue.enqueue(element);
    // Set the pointer in the useState to rerender
    setPointer(queue.getPointer())
  }

  // Local function to dequeue an element from the Queue
  const dequeueQueue = () =>
  {
    // Call the Queue dequeue method
    queue.dequeue();
    // Set the pointer in the useState to rerender
    setPointer(queue.getPointer())
  }

  const peekQueue = () =>
  {
    // Call the Queue peek method
    queue.peek();
  }

  return (
    <div className="App">

        <div className='heading-elements'>
          <p id='title'>Data Structure Demonstration</p>
          <span id='data-structure-name'>Queue</span>
        </div>

        <div className='queue-container'>
          <div className='queue'>
            {/* Map out the Queue and create appropriate divs for elements */}
            {queue.getQueue().map( (element) =>
            {
              // Return empty div for undefined elements
              if(element === undefined)
              {
                return <div></div>
              }
              // Return queue-box div for elements 'defined'
              return <div className='queue-box'>{element}</div>
            })}
          </div>
        </div>
        
        <div className='queue-functions-container'>
          <button onClick={newQueue}>New Queue</button>
          <button onClick={enqueueQueue}>Enqueue</button>
          <button onClick={dequeueQueue}>Dequeue</button>
          <button onClick={peekQueue}>Peek</button>
        </div>
    </div>
  );
}

export default App;
