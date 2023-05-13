// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along
// the longest path from the root node down to the farthest leaf node.


// source: https://leetcode.com/problems/maximum-depth-of-binary-tree/

var maxDepth = function(root) {
    if (!root) return 0;

    // setting initial obj to contain node and current depth
    const stack = [{node: root, depth: 1}];

    // initializing maxDepth to 0
    let maxDepth = 0;

    // while stack length not null
    while (stack.length) {
        // popping off to access node, depth properties from object
        const {node, depth} = stack.pop();
        // setting maxDepth to max of maxDepth or depth
        maxDepth = Math.max(maxDepth, depth);

        // if node.left, push node.left to stack, and increment depth
        if (node.left) {
            stack.push({node: node.left, depth: depth + 1});
        }

        // if node.right, push node.right to stack, and increment depth
        if (node.right) {
            stack.push({node: node.right, depth: depth + 1});
        }
    }

    // return maxDepth
    return maxDepth;
};
