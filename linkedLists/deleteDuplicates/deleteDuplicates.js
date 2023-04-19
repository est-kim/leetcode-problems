// Given the head of a sorted linked list, delete all
// duplicates such that each element appears only once.
// Return the linked list sorted as well.

// source: https://leetcode.com/problems/remove-duplicates-from-sorted-list/

var deleteDuplicates = function(head) {
    if (!head) return head;

    let current = head.next;
    let prev = head;

    while (current) {
        if (current.val === prev.val) {
            prev.next = current.next;
        } else {
            prev = current;
        }
        current = current.next;
    }
    return head;
};
