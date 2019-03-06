// Queue is initially empty.
var Queue = {front: null, back: null};

// We will use a node to keep track of the elements.
// The queue is represented by a linked list.
function Node(data, next) {
	this.data = data;
	this.next = next;
}

// Add elements to queue in O(1) time.
function Enqueue(element) {
	var N = new Node(element, null);
	if (Queue.back === null) {
		Queue.front = N;
		Queue.back = N;
	} else {
		Queue.back.next = N;
		Queue.back = Queue.back.next;
	}
}

// Remove first element from queue in O(1) time.
function Dequeue() {
	if (Queue.front !== null) {
		var first = Queue.front;
		Queue.front = Queue.front.next;
		return first.data;
	} else {
		if (Queue.back !== null) { Queue.back = null; }
		return 'Cannot dequeue because queue is empty';
	}
}

Enqueue('a');
Enqueue('b');
Enqueue('c');
Dequeue(); // "a"
