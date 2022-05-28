/*
This class implements the Priority Queue data structure which sorts elements in either descending order 
meaning the PQ is a max heap and ascending order means the PQ is a min heap.
This is implemented with the function enqueue which inserts an element into the PQ 
 and the function dequeue which removes the element that is higher or lower. 
*/
export default class PriorityQueue {
    // Data fields
    // Holds the type of Priority Queue 
    #type;
    // Holds the size of the Priority  Queue
    #size = 0;
    // Holds the location where we need to push a new element into the Queue
    #pointer = 0;
    // Holds the array which is used as data structure for the Queue
    #queue = new Array(this.#size);
  
    /* Main constructor for the Priority Queue class
          @param size - the size of the Priority Queue created
      */
    constructor(size) {
      this.#type = "max"
      this.#size = size;
      this.#queue = new Array(size);
    }
  
    // Returns the type data field of the Priority Queue class
    getType()
    {
      return this.#type;
    }
    // Returns the size data field of the Priority Queue class
    getSize() {
      return this.#size;
    }
  
    // Returns the pointer data field of the Priority Queue class
    getPointer() {
      return this.#pointer;
    }
  
    // Returns the stack data field of the Priority Queue class
    getQueue() {
      return this.#queue;
    }
  
    /* Enqueue a new element into the Priority Queue
          @param element - the element being pushed into the Priority Queue
      */
    enqueue(element) {
      // Check first if the Priority Queue is full
      if (this.isFull()) {
        // Alert the user the Priority Queue is full therefore we cannot add a new element
        alert('Enqueueing into a full Priority Queue.');
        return;
      }
  
      // Else we enqueue the new element into the Queue
      this.#queue[this.#pointer] = element;
      // Alert the user we enqueued successfully
      alert('Enqueuing into Priority Queue: ' + element);
      // Locate the pointer to the next empty location in the Queue
      this.#pointer++;
      // Check the type of Priority Queue then sort
      if(this.#type === "max")
      {
          this.#queue = mergeSortMax(this.#queue);
      }
      else
      {
          this.#queue = mergeSortMin(this.#queue);
      }

    }
  
    /* Dequeue the first element enqueued into the Priority Queue
      @return data - the first element enqueued into the Priority Queue
      */
    dequeue() {
      // Check first if the Priority Queue is empty
      if (this.isEmpty()) {
        // Alert the user the Priority Queue is empty therefore we cannot remove an element
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
      alert('Dequeueing from Priority Queue: ' + data);
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
      alert('Peeking Priority Queue: ' + this.#queue[0]);
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

    // Change the type of Priority Queue and resort 
    changeType()
    {
      // Check if  Priority Queue is in max heap 
      if(this.#type === 'max')
      {
        // Change type
        this.#type = 'min';
        // Resort 
        this.#queue = mergeSortMin(this.#queue);
      }
      // Check if Priority Queue is in min heap
      else
      {
        // Change type
        this.#type = 'max';
        // Resort 
        this.#queue = mergeSortMax(this.#queue);
      }
    }
  }

// Merge Sort Algorithm which is used to sort the Priority Queue in max heap mode
// Time complexity is Big O(n * log(n))
const mergeSortMax = (arr) => {
  // Base case element is its own array
  if (arr.length < 2) {
    return arr;
  }
  // Declare the midpoint of the array
  let mid = arr.length / 2;
  // Hold each side of the array
  let left = arr.splice(0, mid);
  return mergeHelperMax(mergeSortMax(left), mergeSortMax(arr));
};

// Merge Sort Algorithm which is used to sort the Priority Queue in min heap mode
const mergeSortMin = (arr) => {
  // Base case element is its own array
  if (arr.length < 2) {
    return arr;
  }
  // Declare the midpoint of the array
  let mid = arr.length / 2;
  // Hold each side of the array
  let left = arr.splice(0, mid);
  return mergeHelperMin(mergeSortMin(left), mergeSortMin(arr));
};

// Helper function to sort in descending order 
const mergeHelperMax = (left, right) => {
  let sorted = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(right.shift());
    } else {
      sorted.push(left.shift());
    }
  }
  return [...sorted, ...left, ...right ]
};

// Helper function to sort in ascending order
const mergeHelperMin = (left, right) => {
  let sorted = [];
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      sorted.push(right.shift());
    } else {
      sorted.push(left.shift());
    }
  }
  return [...sorted, ...left, ...right ]
};