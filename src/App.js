import './App.css';
import PriorityQueue from './PriorityQueue'
import { useState, useEffect } from "react";

/*
This React.js App will run the frontend of the Priority Queue data structure.
*/
function App() {
  
  // Holds our useStates
  // An useState for the Priority Queue to keep track of the data structure 
  const [priorityQueue, setPriorityQueue] = useState(new PriorityQueue(5))
  // An useState for the pointer to keep track of when the page needs to render
  const [pointer, setPointer] = useState(priorityQueue.getPointer())
  // An useState for the type of Priority Queue
  const [type, setType] = useState(priorityQueue.getType());
  // An useState for the type button 
  const [buttonMessage, setButtonMessage] = useState("Change to Min Heap")
 
  // An useEffect the notifies the console of a render which is depended on the 
  // pointer changing
  useEffect(() => {
    console.log("render");
  }, [pointer, type])
  
  // Local function to set the new Priority Queue 
  const newQueue = () =>
  {
    setPriorityQueue(new PriorityQueue(5));
  }

  // Local function to enqueue an element into the Priority Queue
  const enqueueQueue = () =>
  {
    // Prompt the user for the element
    const element = prompt("Enter an element to enqueue into the Queue", 0)
    // Call the Priority Queue enqueue method
    priorityQueue.enqueue(element);
    // Set the pointer in the useState to rerender
    setPointer(priorityQueue.getPointer())
  }

  // Local function to dequeue an element from the Priority Queue
  const dequeueQueue = () =>
  {
    // Call the Priority Queue dequeue method
    priorityQueue.dequeue();
    // Set the pointer in the useState to rerender
    setPointer(priorityQueue.getPointer())
  }

  // Local function to peek the top element from the Priority Queue
  const peekQueue = () =>
  {
    // Call the Priority Queue peek method
    priorityQueue.peek();
  }

  //  Local function to change the type of Priority Queue
  const changeQueueType = () =>
  {
    // Check type of Priority Queue
    if(type === "max")
    {
      setButtonMessage("Change to Max Heap");
      priorityQueue.changeType();
      setType("min");
    }
    else
    {
      setButtonMessage("Change to Min Heap");
      priorityQueue.changeType();
      setType("max");
    }
  }

  return (
    <div className="App">

        <div className='heading-elements'>
          <p id='title'>Data Structure Demonstration</p>
          <span id='data-structure-name'>Priority Queue</span>
        </div>

        <div className='queue-container'>
          <div className='queue'>
            {/* Map out the Queue and create appropriate divs for elements */}
            {priorityQueue.getQueue().map( (element) =>
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
          <button onClick={newQueue}>New Priority Queue</button>
          <button onClick={changeQueueType}>{buttonMessage}</button>
          <button onClick={enqueueQueue}>Enqueue</button>
          <button onClick={dequeueQueue}>Dequeue</button>
          <button onClick={peekQueue}>Peek</button>
        </div>
    </div>
  );
}

export default App;
