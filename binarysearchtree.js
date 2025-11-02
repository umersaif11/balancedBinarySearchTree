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
    #levelOrderForEachRecursive(queue, callback) {
        if(queue.length === 0) return;
        let current = queue.shift();
        callback(current);
        if(current.left != null) {
            queue.push(current.left);
        }
        if(current.right != null) {
            queue.push(current.right);
        }
        this.#levelOrderForEachRecursive(queue, callback);

    }
    levelOrderForEachRecusrive(callback) {
        if(typeof callback !== 'function'
            || !callback) {
            throw new Error("Callback is required!");
        }
        if(this.root === null) return;
        let queue = [this.root];
        this.#levelOrderForEachRecursive(queue, callback);
    }
    #preOrderForEach(root, callback) {
        if(root === null) return;
        callback(root);
        this.#preOrderForEach(root.left, callback);
        this.#preOrderForEach(root.right, callback);
    }
    preOrderForEach(callback) {
        if(typeof callback !== 'function'
            || !callback) {
            throw new Error("Callback is required!");
        }
        this.#preOrderForEach(this.root, callback);
    }
    #inOrderForEach(root, callback) {
        if(root === null) return;
        this.#inOrderForEach(root.left, callback);
        callback(root);
        this.#inOrderForEach(root.right, callback);
    }
    inOrderForEach(callback) {
        if(typeof callback !== 'function'
            || !callback) {
            throw new Error("Callback is required!");
        }
        this.#inOrderForEach(this.root, callback);
    }
    #postOrderForEach(root, callback) {
        if(root === null) return;
        this.#postOrderForEach(root.left, callback);
        this.#postOrderForEach(root.right, callback);
        callback(root);
    }
    postOrderForEach(callback) {
        if(typeof callback !== 'function'
            || !callback) {
            throw new Error("Callback is required!");
        }
        this.#postOrderForEach(this.root, callback);
    }
    #height(node) {
        if(node === null) {
            return -1;
        }
        let left = this.#height(node.left);
        let right = this.#height(node.right);
        return Math.max(left, right) + 1;
    }
    height(value) {
        let node = this.find(value);
        if(node === null) return null;
        return this.#height(node);
    }
    //This depth function implementation works but function
    //can be written more efficiently, see below comments

    // #depth(root, value) {
    //     if(root === null) {
    //         return null;
    //     }
    //     if(value < root.data) {
    //         return this.#depth(root.left, value) + 1;
    //     } else if(value > root.data) {
    //         return this.#depth(root.right, value) + 1;
    //     } else {
    //         return 0;
    //     }
    // }
    // depth(value) {
    //     if(!value || !this.find(value)) {
    //         return 'Value not exist';
    //     }
    //     return this.#depth(this.root, value);
    // }
    #depth(root, value, counter) {
        if(root === null) return null;
        if(value === root.data) return counter;

        if(value < root.data) {
            return this.#depth(root.left, value, counter + 1);
        } else {
            return this.#depth(root.right, value, counter + 1);
        }
    }
    depth(value) {
        if(!value) return null;
        return this.#depth(this.root, value, 0);
    }
    //Following solution of isbalanced is very inefficient
    //as it goes over same nodes again and again and so
    //has time complexity of O(nlogn)

    // isBalanced(root) {
    //     if(root === null) return true;
    //     if(Math.abs(
    //         this.height(root.left) -
    //         this.height(root.right)
    //     ) > 1) return false;
    //     return this.isBalanced(root.left) 
    //         && this.isBalanced(root.right);
    // }
    #isBalanced(root) {
        if(root === null) return -1;
        leftHeight = this.#isBalanced(root.left);
        rightHeight = this.#isBalanced(root.right);


        return Math.max(
            leftHeight, rightHeight
        ) + 1;
    }
}
export { Tree }