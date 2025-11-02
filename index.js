import { Tree } from "./binarysearchtree.js"

const bst = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67]);

console.log(bst.isBalanced());

bst.prettyPrint();

const levelOrderArray = [];
bst.levelOrderForEach((node) => {
    levelOrderArray.push(node.data);
});
console.log('Level Order Traversal: ', levelOrderArray.join(' --> '));

const preOrderArray = [];
bst.preOrderForEach((node) => {
    preOrderArray.push(node.data);
});
console.log('Pre Order Traversal: ', preOrderArray.join(' --> '));

const inOrderArray = [];
bst.inOrderForEach((node) => {
    inOrderArray.push(node.data);
});
console.log('In Order Traversal: ', inOrderArray.join(' --> '));

const postOrderArray = [];
bst.postOrderForEach((node) => {
    postOrderArray.push(node.data);
});
console.log('Post Order Traversal: ', postOrderArray.join(' --> '));

bst.insert(149);
bst.insert(135);
bst.insert(177);
bst.insert(191);

console.log(bst.isBalanced());

bst.prettyPrint();

bst.rebalance();

console.log(bst.isBalanced());

bst.prettyPrint();

const levelOrderArrayTwo = [];
bst.levelOrderForEach((node) => {
    levelOrderArrayTwo.push(node.data);
});
console.log('Level Order Traversal: ', levelOrderArrayTwo.join(' --> '));

const preOrderArrayTwo = [];
bst.preOrderForEach((node) => {
    preOrderArrayTwo.push(node.data);
});
console.log('Pre Order Traversal: ', preOrderArrayTwo.join(' --> '));

const inOrderArrayTwo = [];
bst.inOrderForEach((node) => {
    inOrderArrayTwo.push(node.data);
});
console.log('In Order Traversal: ', inOrderArrayTwo.join(' --> '));

const postOrderArrayTwo = [];
bst.postOrderForEach((node) => {
    postOrderArrayTwo.push(node.data);
});
console.log('Post Order Traversal: ', postOrderArrayTwo.join(' --> '));
