Study Guide: Linked Lists in JavaScript

1. What is a Linked List?

A linked list is a way to store data where each piece of data (node) is connected to the next one in line. Unlike arrays, which store elements in a fixed-size, continuous block of memory, linked lists can be spread across different memory locations. This makes inserting and deleting elements easier compared to arrays but makes accessing elements slower since you have to traverse the list one node at a time. Unlike arrays, which are stored in a row, linked lists can be scattered in memory.

Types of Linked Lists:

Singly Linked List: Each node points to the next one.

Doubly Linked List: Each node points to both the next and the previous one.

Circular Linked List: The last node loops back to the first node.

2. What Does a Node Look Like?

Each node has:

A value (the data it stores)

A next (a pointer to the next node)

Example Node in JavaScript:

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

3. How to Make a Singly Linked List

Singly linked lists are useful when memory efficiency is a priority, and you only need to traverse in one direction. They use less memory compared to doubly linked lists because they only store a single pointer per node, making them ideal for simple data structures like stacks and queues. A singly linked list keeps track of the head (first node) and tail (last node).

Example Linked List Class:

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
}

4. How to Make a Doubly Linked List

A doubly linked list has a next and prev pointer.

Example Node for Doubly Linked List:

class DoublyNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

Example Doubly Linked List Class:

Doubly linked lists are useful when you need to move in both directions efficiently. They allow quick insertions and deletions at both ends, making them ideal for applications like browser history navigation and undo/redo operations in text editors.

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

5. Common Linked List Operations

Operation

What It Does

append(value)

Adds a node at the end

prepend(value)

Adds a node at the beginning

removeFirst()

Removes the first node

removeLast()

Removes the last node

find(value)

Finds a node with a specific value

insert(index, value)

Puts a node at a certain spot

delete(index)

Removes a node at a certain spot

6. How Fast Are Linked Lists?

Operation

Singly List

Doubly List

Read

O(n)

O(n)

Search

O(n)

O(n)

Add

O(1) at head/tail

O(1) at head/tail

Remove

O(1) at head/tail

O(1) at head/tail

7. When to Use Linked Lists

Undo/redo features (like in a text editor)

Making stacks and queues

Storing game objects in memory efficiently

Graphs and networking (like social media connections)

8. Practice Problems

Try these to get better at linked lists:

Write a method to find a node by its value.

Write a method to insert a node at a given position.

Write a method to remove a node from a given position.

Write a method to reverse the list.

Example Challenge: Detect a Loop

Some linked lists loop back to an earlier node. Try writing a function to check if there’s a loop:

Solution:

function hasCycle(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}