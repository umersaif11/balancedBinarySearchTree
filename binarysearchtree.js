class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class Tree {
    constructor(array) {
        const processed = this.processedArray(array);

        this.root = this.buildTree(processed, 0, processed.length - 1);
    }
    processedArray(array) {
        const uniqueArray = array.filter((item, index) => {
            return array.indexOf(item) === index;
        });

        uniqueArray.sort((a, b) => a - b);

        return uniqueArray;
    }
    buildTree(array, start, end) {
        if(start > end) return null;

        let mid = start + Math.floor((end - start) / 2);

        let root = new Node(array[mid]);

        root.left = this.buildTree(array, start, mid - 1);

        root.right = this.buildTree(array, mid + 1, end);

        return root;
    }
    prettyPrint(node = this.root, prefix = '', isLeft = true) {
        if (node === null) {
            return;
        }
        if (node.right !== null) {
            this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        if (node.left !== null) {
            this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
    }
    treeRoot() {
        return this.root;
    }
     /**
     * Function to Insert Node in a Binary Search Tree
     * @param {Node} node - The root node of the current subtree.
     * @param {string} data - The character data to insert.
     * @returns {Node} - The (potentially new) root of the subtree.
     */
    insert(node, key) {
        if(node === null) {
            return new Node(key);
        }
        if(key < node.data) {
            node.left = this.insert(node.left, key);
        } else if(key > node.data) {
            node.right = this.insert(node.right, key);
        } else {
            return;
        }
        return node;
    }
    getSuccessor(curr) {
        let current = curr.right;
        while(current !== null & current.left !== null) {
            current = current.left;
        }
        return current;
    }
    deleteItem(node, key) {
        if(node === null) {
            return node
        }
    }
}
const bst = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
const node = bst.buildTree()
bst.prettyPrint();
bst.insert(node,12);
bst.prettyPrint();