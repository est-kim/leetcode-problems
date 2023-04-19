// Given the head of a singly linked list, return
// the middle node of the linked list.

// If there are two middle nodes, return the second
// middle node.

// source: https://leetcode.com/problems/middle-of-the-linked-list/


var middleNode = function(head) {
    if (!head) return head;

    let current = head;
    let counter = 0;
    while (current) {
        current = current.next;
        counter++;
    }

    let mid = Math.floor(counter / 2);
    current = head;
    while (mid > 0) {
        current = current.next;
        mid--;
    }
    return current;
};
