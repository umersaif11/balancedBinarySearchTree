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
    buildTree(array, start, end) {
        if(start > end) return null;

        let mid = start + Math.floor((end - start) / 2);

        let root = new Node(array[mid]);

        root.left = buildTree(array, start, mid - 1);

        root.right = buildTree(array, mid + 1, end);

        
    }
}