/**
 * Each element (commonly called nodes) contains two items: the data stored and a link to the next node.
 */
class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

/**
 * A linked list is a linear data structure similar to an array.
 * However, unlike arrays, elements are not stored in a particular memory location or index.
 * Rather each element is a separate object that contains a pointer or a link to the next object in that list.
 */
class LinkedList {
    constructor() {
        // The first node in the list
        this.head = null;
        // Number of nodes in the list
        this._size = 0
    }

    /**
     * Add a new node in the list
     * @param data
     */
    add(data) {
        // Create a new node
        const node = new Node(data);

        if (!this.head) {
            // If it is the first node
            this.head = node
        } else {
            // if it's not the first node
            let current = this.head;
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        // Increse the size of the list
        this._size++
    }

    /**
     * Remove a node from the list
     * @param data
     * @return {*}
     */
    removeElement(data) {
        let current = this.head;
        let previous = null;
        // Iterate through the list of nodes
        while (current) {
            if (current.data === data) {
                // If we found a node with the value we are searching
                if (previous === null) {
                    // If it's the first in the list, update the head
                    this.head = current.next
                } else {
                    // If it's not the first node
                    previous.next = current.next
                }
                // Update the list size
                this._size--;
                // Return the node value
                return current.data
            }
            // Update the previous and current nodes
            previous = current;
            current = current.next
        }
    }

    /**
     * Find the index of a node with a specific value
     * @param data
     * @return {number}
     */
    indexOf(data) {
        // Index counter
        let count = 0;
        let current = this.head;

        // Iterate through the list
        while (current) {
            if (current.data === data) {
                // If we found a node with the value we search return it's index
                return count
            }
            // Increase the index counter
            count++;
            // Go to the next node in the list
            current = current.next
        }
        return -1
    }

    /**
     * Returns the first element of the list
     * @return {null|*}
     */
    firstElement() {
        if (!this.head) return null;
        return this.head.data
    }

    /**
     * Returns the last element of the list
     * @return {null|*}
     */
    lastElement() {
        if (!this.head) return null;
        let current = this.head;
        while (current.next) {
            current = current.next
        }
        return current.data
    }

    /**
     * Returns if the list is empty or not
     * @return {boolean}
     */
    isEmpty() {
        return this._size === 0
    }

    /**
     * Returns the number of elements in the list
     * @return {number}
     */
    size() {
        return this._size
    }
}

// Dummy example
const list = new LinkedList();
list.add(1);
list.add(6);
list.add(45);
list.removeElement(6);
console.log(list);
console.log(list.indexOf(45));
console.log('first element', list.firstElement());
console.log('last element', list.lastElement());
console.log('is empty', list.isEmpty());
console.log('size', list.size());
