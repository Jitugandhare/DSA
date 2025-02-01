class Queue {
    constructor() {
        this.items = [];
    }

    // Enqueue (Add an element at the rear)
    enqueue(element) {
        this.items.push(element);
    }

    // Dequeue (Remove an element from the front)
    dequeue() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items.shift();
    }

    // Peek (Get the front element without removing it)
    front() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items[0];
    }

    // isEmpty (Check if the queue is empty)
    isEmpty() {
        return this.items.length === 0;
    }

    // Size (Return the size of the queue)
    size() {
        return this.items.length;
    }

    // Print the queue
    printQueue() {
        console.log(this.items);
    }
}

// Example Usage
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.dequeue()); // 10
console.log(queue.front());   // 20
console.log(queue.size());    // 2
queue.printQueue();           // 20 30
