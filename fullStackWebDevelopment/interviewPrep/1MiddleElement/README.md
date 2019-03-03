# Find the Middle Element of a Linked List

A linked list is a data structure which consists of a group of nodes where
each node may point to some other node to form a sequence. Our nodes will
have two fields:

* (1) a "data" field which will store our data (string, number, etc.)
* (2) a "next" field which will be a reference to some other node

Linked lists are useful and simple data structures and are sometimes
preferred over using arrays because inserting or deleting elements
can be done without reallocation or reorganization of the entire structure.

If, for example, you wanted to add an element to the beginning of the
array, every single other element would need to be moved and the array
would need to make space for one extra element. Inserting an element
at the beginning of a linked list simply requires you to create a new
node and set its "next" field to point to some node, making this new
node the first node in the sequence now.

