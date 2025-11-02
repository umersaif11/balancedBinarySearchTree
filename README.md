# balancedBinarySearchTree

An Odin Project Learning about the Balanced Binary
Search Tree Data Structure.

This project implements BST using  
modern JavaScript (ES6 modules) and Node v22.  


## Features

The `BinarySearchTree` class includes the following  
functions:

- `Node class/factory`  
  Should have an attribute for the data it stores as 
  well as its left and right children.  

- `Tree class/factory`  
  Accepts an array when initialized. The Tree class should 
  have a root attribute, which uses the return value of buildTree.   

- `buildTree(array)`  
  Function that takes an array of data (e.g., [1, 7, 4, 23, 8, 9, 4, 
  3, 5, 7, 9, 67, 6345, 324]) and turns it into a balanced binary tree 
  full of Node objects appropriately placed (don’t forget to sort and
  remove duplicates!). The buildTree function should return the level-0
   root node.  

- `insert(value)/deleteItem(value)`  
   Functions that insert/delete the given value.  

- `find(value)`  
  Function that returns the node with the given value.  

- `levelOrderForEach(callback)`  
  function that accepts a callback function as its parameter. 
  levelOrderForEach should traverse the tree in breadth-first
  level order and call the callback on each node as it traverses 

- `inOrderForEach(callback), preOrderForEach(callback), postOrderForEach(callback)`  
  Each of these functions should traverse the tree in their respective depth-first 
  order and pass each node to the provided callback. 

- `height(value)`  
  Function that returns the height of the node containing the 
  given value. Height is defined as the number of edges in the 
  longest path from that node to a leaf node..  

- `depth(value)`  
  Function that returns the depth of the node containing the 
  given value. Depth is defined as the number of edges in the path
  from that node to the root node.  

- `isBalanced`  
  Function that checks if the tree is balanced. A binary tree is 
  considered balanced if, for every node in the tree, the height 
  difference between its left and right subtrees is no more than 1, 
  and both the left and right subtrees are also balanced. 


- `rebalance`
  Function that rebalances an unbalanced tree.


### Testing

Run `node index.js`

Testing will execute function in following order

1) Create a binary search tree from an array of random numbers < 100.
 
2) Confirm that the tree is balanced by calling isBalanced.

3) Print out all elements in level, pre, post, and in order.

4) Unbalance the tree by adding several numbers > 100.

5) Confirm that the tree is unbalanced by calling isBalanced.

6) Balance the tree by calling rebalance.

7) Confirm that the tree is balanced by calling isBalanced.

8) Print out all elements in level, pre, post, and in order.

