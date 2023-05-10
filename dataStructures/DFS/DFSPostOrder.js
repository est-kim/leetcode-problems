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
  DFSPostOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(current);
    return data;
  }
}

// Iterative method
const PostOrder2 = (root) => {
  const stack1 = [root],
    stack2 = [];
  let curr;

  // left -> right -> parent
  while (stack1.length) {
    curr = stack1.pop();
    if (curr.left) stack1.push(curr.left);
    if (curr.right) stack1.push(curr.right);
    stack2.push(curr);
  }

  return stack2.reverse();
};

// leetcode recursive practice
var postorderTraversal = function (root) {
  // recursive practice
  // initialize traversed to empty array
  let traversed = [];
  // create helper function traverse, passing in node
  function traverse(node) {
    // base case if !node, return empty array []
    if (!root) return [];
    // traverse node.left
    if (node.left) traverse(node.left);
    // traverse node.right
    if (node.right) traverse(node.right);
    // push node.val into array
    traversed.push(node.val);
  }
  // invoke traverse passing in root
  traverse(root);
  // return array
  return traversed;
};
