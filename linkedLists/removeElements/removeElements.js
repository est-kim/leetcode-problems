// Given the head of a linked list and an integer val,
// remove all the nodes of the linked list that has
// Node.val == val, and return the new head.

// source: https://leetcode.com/problems/remove-linked-list-elements/

var removeElements = function(head, val) {
    // while head exists and head.val is val to be removed,
    // new head is head.next
    while (head && head.val === val) {
        head = head.next;
    }

    let current = head;
    let prev = null;

    while (current) {
        if (current.val === val) {
            prev.next = current.next;
        } else {
            prev = current;
        }
        current = current.next;
    }
    return head;
};
