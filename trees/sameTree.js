// Given the roots of two binary trees p and q, write a function
// to check if they are the same or not.

// Two binary trees are considered the same if they are structurally
// identical, and the nodes have the same value.

// source: https://leetcode.com/problems/same-tree/

// recursive method
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

// iterative method
var isSameTree2 = function(p, q) {
    const pStack = [], pTraversed = [];
    const qStack = [], qTraversed = [];
    let currP = p;
    let currQ = q;

    while (pStack.length || qStack.length || currP || currQ) {
        while (currP || currQ) {
            if (currP && !currQ) {
                pStack.push(currP);
                pTraversed.push(currP.val);
                currP = currP.left;
                qTraversed.push(null);
            } else if (!currP && currQ) {
                qStack.push(currQ);
                qTraversed.push(currQ.val);
                currQ = currQ.left;
                pTraversed.push(null);
            } else {
                pStack.push(currP);
                qStack.push(currQ);
                pTraversed.push(currP.val);
                qTraversed.push(currQ.val);
                currP = currP.left;
                currQ = currQ.left;
            }
        }

        if (pStack.length) {
            currP = pStack.pop();
            currP = currP.right;
        } else {
            currP = null;
        }

        if (qStack.length) {
            currQ = qStack.pop();
            currQ = currQ.right;
        } else {
            currQ = null;
        }
    }

    for (let i = 0; i < pTraversed.length; i++) {
        if (pTraversed[i] !== qTraversed[i]) return false;
    }

    return true;
};
