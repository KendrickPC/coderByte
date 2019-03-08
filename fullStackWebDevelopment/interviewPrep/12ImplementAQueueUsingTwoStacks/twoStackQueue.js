// Implementing stacks using plain arrays with push and pop functions.
var Stack1 = [];
var Stack2 = [];

// Implement enqueue method by using only
// stacks with the push and pop functions.

function Enqueue(element) {
  Stack1.push(element);
}

// Implement dequeue method by pushing all elements from stack 1 
// into stack 2. This reverses the order. Then pop from stack 2.
function Dequeue() {
  if (Stack2.length === 0) {
    if (Stack1.length === 0) { return 'Cannot dequeue because is empty.'; }
    while (Stack1.length > 0) {
      var p = Stack1.pop();
      Stack2.push(p);
    }
  }
  return Stack2.pop();
}

Enqueue('a');
Enqueue('b');
Enqueue('c');
Dequeue();