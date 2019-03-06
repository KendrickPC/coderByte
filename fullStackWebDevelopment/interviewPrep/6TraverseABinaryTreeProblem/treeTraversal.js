function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}    

// create nodes
var root = new Node('A');
var n1 = new Node('B');
var n2 = new Node('C');
var n3 = new Node('D');
var n4 = new Node('E');

// setup children
root.left = n1;
root.right = n2;
n1.left = n3;
n1.right = n4;


function pre_order(root, nodes) {
  nodes.push(root.data);
  if (root && root.left) {
    pre_order(root.left, nodes);
  }
  if (root && root.right) {
    pre_order(root.right, nodes);
  }
  return nodes;
}

pre_order(root, []); 

// ["A", "B", "D", "E", "C"]
// Pre-order goes left(MY LEFT) first and then goes left(MY LEFT) again
// before traversing right(MY RIGHT).

// ---------------------------------------------------------------------

function in_order(root, nodes) {
    if (root && root.left) {
        in_order(root.left, nodes);   
    }
    nodes.push(root.data);
    if (root && root.right) {
        in_order(root.right, nodes);  
    }
    return nodes;
}

in_order(root, []); // => [ D, B, E, A, C ]

// ---------------------------------------------------------------------

function post_order(root, nodes) {
    if (root && root.left) {
        post_order(root.left, nodes);   
    }
    if (root && root.right) {
        post_order(root.right, nodes);  
    }
    nodes.push(root.data);
    return nodes;
}

post_order(root, []); // => [ D, E, B, C, A ]

// ---------------------------------------------------------------------

function level_order(root, nodes) {
    var queue = [root];
    while (queue.length > 0) {
        // front of queue is at element 0 and we push elements to back of queue
        var n = queue.shift();
        nodes.push(n.data);
        if (n.left !== null) { queue.push(n.left); }
        if (n.right !== null) { queue.push(n.right); }
    }
    return nodes;
}

level_order(root, []); // => [ A, B, C, D, E ]

// ---------------------------------------------------------------------


