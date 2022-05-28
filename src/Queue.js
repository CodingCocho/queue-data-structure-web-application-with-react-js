/*
This class implements the Stack data structure which follows FIFO which means first-in first-out.
This is implemented with the function enqueue which inserts an element into the Queue at the first
empty location and the function dequeue which removes the first element enqueued. 
*/
export default class Queue {
    // Data fields
    // Holds the size of the Queue
    #size = 0;
    // Holds the location where we need to push a new element into the Queue
    #pointer = 0;
    // Holds the array which is used as data structure for the Queue
    #queue = new Array(this.#size);
  
    /* Main constructor for the Queue class
          @param size - the size of the Queue created
      */
    constructor(size) {
      this.#size = size;
      this.#queue = new Array(size);
    }
  
    // Returns the size data field of the Queue class
    getSize() {
      return this.#size;
    }
  
    // Returns the pointer data field of the Queue class
    getPointer() {
      return this.#pointer;
    }
  
    // Returns the stack data field of the Queue class
    getQueue() {
      return this.#queue;
    }
  
    /* Enqueue a new element into the Queue
          @param element - the element being pushed into the Queue
      */
    enqueue(element) {
      // Check first if the Queue is full
      if (this.isFull()) {
        // Alert the user the Queue is full therefore we cannot add a new element
        alert('Enqueueing into a full Queue.');
        return;
      }
  
      // Else we enqueue the new element into the Queue
      this.#queue[this.#pointer] = element;
      // Alert the user we enqueued successfully
      alert('Enqueuing into Queue: ' + element);
      // Locate the pointer to the next empty location in the Queue
      this.#pointer++;
    }
  
    /* Dequeue the first element enqueued into the Queue
      @return data - the first element enqueued into the Queue
      */
    dequeue() {
      // Check first if the Queue is empty
      if (this.isEmpty()) {
        // Alert the user the Queue is empty therefore we cannot remove an element
        alert('Dequeueing from an empty Queue.');
        return;
      }
  
      // Locate the pointer to the new empty location
      this.#pointer--;
      // Holds the data we are going to remove
      const data = this.#queue[0];
      // Remove the data from the queue
      this.#queue.shift();
      // Replace the data with an undefined element
      this.#queue.push(undefined);
      // Alert the user we dequeued successfully
      alert('Dequeueing from Queue: ' + data);
      // Return the element dequeued
      return data;
    }
  
    // Returns the last element enqueued into the Stack
    peek() {
      // Check first if the Queue is empty
      if (this.isEmpty()) {
        // Alert the user that the Queue is empty therefore we cannot peek
        alert('Peeking from an empty Queue.');
        return;
      }
  
      //Alert the user what element is being peeked
      alert('Peeking Queue: ' + this.#queue[0]);
      // Return the first element enqueued into the Queue
      return this.#queue[0];
    }
  
    // Returns true if the Queue is full
    isFull() {
      return this.#pointer === this.#size;
    }
  
    // Returns true if the Queue is empty
    isEmpty() {
      return this.#pointer === 0;
    }
  
    // Prints out the Queue
    printQueue() {
      console.log(this.#queue);
    }
  }