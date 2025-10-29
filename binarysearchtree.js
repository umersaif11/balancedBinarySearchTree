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
    #insert(node, key) {
        if(node === null) {
            return new Node(key);
        }
        if(key < node.data) {
            node.left = this.#insert(node.left, key);
        } else if(key > node.data) {
            node.right = this.#insert(node.right, key);
        } else {
            return;
        }
        return node;
    }
    insert(key) {
        this.root = this.#insert(this.root, key);
    }
    getSuccessor(curr) {
        let current = curr.right;
        while(current !== null && current.left !== null) {
            current = current.left;
        }
        return current;
    }
    #deleteItem(node, key) {
        if(node === null) {
            return node;
        }
        if(key < node.data) {
            node.left = this.#deleteItem(node.left, key);
        } else if(key > node.data) {
            node.right = this.#deleteItem(node.right, key);
        } else {
            if(node.left === null) {
                return node.right;
            }
            if(node.right === null) {
                return node.left;
            }
            const successorNode = this.getSuccessor(node);
            node.data = successorNode.data;
            node.right = this.#deleteItem(node.right, successorNode.data);
        }
        return node;
    }
    deleteItem(key) {
        this.root = this.#deleteItem(this.root, key);
    }
    #find(node, key) {
        if(node === null) {
            return node;
        }
        if(key < node.data) {
            return this.#find(node.left, key);
        } else if(key > node.data) {
            return this.#find(node.right, key);
        } else {
            return node;
        }
    }
    find(key) {
        return this.#find(this.root, key);
    }
    #levelOrderForEach(root, callback) {
        if(typeof callback !== 'function'
            || !callback) {
            throw new Error("Callback is required!");
        }
        if(root === null) return;
        let queue = [root];
        while(queue.length > 0) {
            let current = queue.shift();
            callback(current);
            if(current.left != null) {
                queue.push(current.left);
            }
            if(current.right != null) {
                queue.push(current.right);
            }
        }
    }
    levelOrderForEach(callback) {
        this.#levelOrderForEach(this.root, callback);
    }
    #levelOrderForEachRecursive(root, level, callback) {
        if(typeof callback !== 'function'
            || !callback) {
            throw new Error("Callback is required!");
        }
        if(root === null) return;
        let queue = [];
        queue.push(root);
        callback(root);

        this.#levelOrderForEachRecursive(root.left, callback);
        this.#levelOrderForEachRecursive(root.right, callback);
    }
    levelOrderForEachRecusrive(callback) {
        this.#levelOrderForEachRecursive(this.root, callback);
    }
}
export { Tree }