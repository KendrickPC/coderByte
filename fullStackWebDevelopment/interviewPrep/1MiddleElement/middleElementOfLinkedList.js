// Node Setup

function Node(data, next) {
  this.data = data;
  this.next = next;
}

// This is how we can then create a linked list with connecting nodes:

var n1 = new Node("Hello", null);   
var n2 = new Node("21", n1); 
var n3 = new Node("Green", n2); 

// assign a node to the head which functions
// as the entry into our linked list
var head = n3;

// Our challenge is to now find the middle node in a linked list.
// We do not initially know the length of a linked list, all we have is a
// single node which acts as the head of the linked list and which we can
// access all other nodes by traversing through each nodes "next" property.
// We can continuously loop through each node until we get to a node that
// has a "next" property of null, which means we have reached the last node.

// Naive solution

// A simple way to determine the middle node would be to fully pass through all
// nodes in the linked list and count how many elements there are in total. Then
// traverse the linked list again this time stopping at the total/2 node. For
// example, the first time you traverse the linked list your program determines
// there are 10 nodes, then the second pass through the linked list you stop at
// the 5th node, which is the middle node. This is a possible solution, but
// there is a faster way.

// Faster solution using 2 pointers

// What we will do is setup two pointers, one that will traverse the linked list
// one node at a time, and the other pointer will traverse two nodes at a time.
// This way when the faster pointer reaches the end of the linked list,
// the slower pointer will be halfway there because it was only moving one node
// at time while the faster one was moving two nodes at a time. This allows you
// to find the middle node of a linked list with only one pass, instead of passing
// through the whole linked list once, and then again to find the middle element.

function Node(data, next) {
  this.data = data;
  this.next = next;
}    

// setup some nodes and connect them to each other
// the linked list looks like:
// (head) n5 -> n4 -> n3 -> n2 -> n1 -> null
var n1 = new Node("Hello", null);   
var n2 = new Node("21", n1); 
var n3 = new Node("Green", n2); 
var n4 = new Node("Blue", n3); 
var n5 = new Node("Kennneth", n4); 

// assign a node to the head which functions
// as the entry into our linked list
var head = n5; 

// setup pointers to both start
// at the head of the linked list
var fastPointer = head;
var slowPointer = head;

// loop through the linked list
// when fastPointer reaches the end of the list
// then slowPointer will be at the middle node
while (fastPointer.next !== null && fastPointer.next.next !== null) {
  fastPointer = fastPointer.next.next;   
  slowPointer = slowPointer.next;
}

// slowPointer is now at the middle node in the linked list
slowPointer.data 

// Running time

// The running time of finding the middle element this way with two pointers is O(n)
// because once we pass through the entire linked list of n elements, the slower
// pointer is at the middle node already.


