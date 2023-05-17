// You are given two binary trees root1 and root2.

// Imagine that when you put one of them to cover the other, some nodes
// of the two trees are overlapped while the others are not. You need to
// merge the two trees into a new binary tree. The merge rule is that if
// two nodes overlap, then sum node values up as the new value of the
// merged node. Otherwise, the NOT null node will be used as the node of
// the new tree.

// Return the merged tree.

// Note: The merging process must start from the root nodes of both trees

// source: https://leetcode.com/problems/merge-two-binary-trees/

var mergeTrees = function (root1, root2) {
  const traversed1 = [],
    queue1 = [];
  const traversed2 = [],
    queue2 = [];

  function traverse(root, traversedArr, queue) {
    let current = root;
    queue.push(current);
    while (queue.length !== 0) {
      current = queue.shift();
      if (current) {
        traversedArr.push(current.val);
        queue.push(current.left);
        queue.push(current.right);
      } else {
        traversedArr.push(null);
      }
    }
    return traversedArr;
  }

  traverse(root1, traversed1, queue1);
  traverse(root2, traversed2, queue2);

  const newTree = buildTree(newTree, traversed1, traversed2, 0);

  return newTree;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function buildTree(newTree, traversed1, traversed2, index) {
  if (index >= traversed1.length) {
    return null;
  }

  const value1 = traversed1[index];
  const value2 = traversed2[index];

  if (value1 === null && value2 === null) {
    return null;
  }

  const newNode = new TreeNode(newTree[index]);
  newNode.left = buildTree(newTree, traversed1, traversed2, 2 * index + 1);
  newNode.right = buildTree(newTree, traversed1, traversed2, 2 * index + 2);

  return newNode;
}

// improved recursive solution

var mergeTrees2 = function (root1, root2) {
  // Base case to return null as result of having both root1, root2 null
  if (!root1 && !root2) {
    return null;
  }

  const val1 = root1 ? root1.val : 0;
  const val2 = root2 ? root2.val : 0;

  const root = new TreeNode(val1 + val2);
  root.left = mergeTrees(root1 ? root1.left : null, root2 ? root2.left : null);
  root.right = mergeTrees(
    root1 ? root1.right : null,
    root2 ? root2.right : null
  );
  return root;
};
