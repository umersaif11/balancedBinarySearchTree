import { Tree } from "./binarysearchtree.js"

const bst = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
bst.prettyPrint();
bst.insert(12);
bst.prettyPrint();
bst.deleteItem(67);
bst.prettyPrint();
console.log(bst.find(324));

const bsttwo = new Tree([10, 5]);
bsttwo.prettyPrint();
bsttwo.deleteItem(5);
bsttwo.prettyPrint();