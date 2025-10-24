class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class Tree {
    constructor() {
        this.root = null;
    }
    processedArray(array) {
        const uniqueArray = array.filter((item, index) => {
            return array.indexOf(item) === index;
        });
        uniqueArray.sort((a, b) => a - b);
        return uniqueArray;
    }
    buildTree(array) {
        
    }
}