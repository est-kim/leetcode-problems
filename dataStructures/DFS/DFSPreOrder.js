class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  contains(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  // recursive method
  DFSPreOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
        data.push(node.value);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right)
    }
    traverse(current);
    return data;
  }
}

// iterative method
const DFSPreOrder = (root) => {
    const stack = [root];
    const traversed = [];
    let curr;

    while (stack.length) {
        curr = stack.pop();
        traversed.push(curr.val);
        if (curr.right) stack.push(curr.right)
        if (curr.left) stack.push(curr.left)
    }

    return traversed;
}

// iterative method #2
const DFSPreOrder2 = (root) => {
    const stack = [];
    const traversed = [];
    let curr = root;

    while (stack.length || curr) {
        while (curr) {
            traversed.push(curr.val);
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        curr = curr.right;
    }
    return traversed;
}
