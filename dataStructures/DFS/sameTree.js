// Given the roots of two binary trees p and q, write a function
// to check if they are the same or not.

// Two binary trees are considered the same if they are structurally
// identical, and the nodes have the same value.

// source: https://leetcode.com/problems/same-tree/


var isSameTree = function(p, q) {
    const pData = [];
    const qData = [];

    function traverse(node, data) {
        if (!node) return [];
        data.push(node.val);
        if (node.left) {
            traverse(node.left, data);
        } else {
            data.push(null);
        }
        if (node.right) {
            traverse(node.right, data)
        } else {
            data.push(null);
        }
    }

    traverse(p, pData);
    traverse(q, qData);

    if (pData.length !== qData.length) return false;

    for (let i = 0; i < pData.length; i++) {
        if (pData[i] !== qData[i]) {
            return false;
        }
    }

    return true;
};
