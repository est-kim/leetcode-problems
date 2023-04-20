// Given the head of a singly linked list,
// reverse the list, and return the reversed list.

// source: https://leetcode.com/problems/reverse-linked-list/


var reverseList = function(head) {
    let prev = null;
    let next = null;

    while (head) {
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
};
