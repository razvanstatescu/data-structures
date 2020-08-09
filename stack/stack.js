class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    // Add element on top of the stack
    push(item) {
        console.log(`Added item ${item} to stack`);
        this.items[this.count] = item;
        return this.count++;
    }

    // Return and remove the top element from the stack
    pop() {
        if (this.count === 0) return undefined;
        const deletedItem = this.items[--this.count];
        console.log(`Removed item ${deletedItem} from the stack`);
        return deletedItem;
    }

    // Return top element from the stack
    peek() {
        const element = this.items[this.count - 1];
        console.log(`Top stack element is ${element}`);
        return element;
    }

    // Return true is the stack is empty or false otherwise
    isEmpty() {
        console.log(`The stack is ${this.count === 0 ? 'empty' : 'not empty'}`);
        return this.count === 0;
    }

    // Return the number of elements in the stack
    size() {
        console.log(`There are ${this.count} elements in the stack`);
        return this.count;
    }

    // Prints out the stack in a nice, formatted way
    print() {
        let str = '';
        str += '[';
        for (let i = this.count - 1; i >= 0; i--) {
            str += this.items[i];
            if (i > 0) {
                str += ',';
            }
        }
        str += ']';
        console.log(str);
    }

    // Empty the stack
    clear() {
        console.log('Stack cleared');
        this.items = [];
        this.count = 0;
    }
}

// Dummy example
const myStack = new Stack();
myStack.push(5); // 5
myStack.push(545); // 545 5
myStack.pop(); // 5
myStack.peek(); // 5
myStack.isEmpty(); // 5
myStack.size(); // 5
myStack.print();
myStack.push(545); // 545 5
myStack.print();
myStack.push(8); // 8 545 5
myStack.print();
myStack.clear(); // []
myStack.push(8); // 8
myStack.print();
