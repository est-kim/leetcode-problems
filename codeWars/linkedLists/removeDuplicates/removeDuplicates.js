// Linked Lists - Remove Duplicates

// Write a RemoveDuplicates() function which takes a list sorted in increasing order and
// deletes any duplicate nodes from the list. Ideally, the list should only be traversed once.
// The head of the resulting list should be returned.

// source: https://www.codewars.com/kata/55d9f257d60c5fd98d00001b

function Node(data) {
  this.data = data;
  this.next = null;
}

function removeDuplicates(head) {
  if (head === null) return null;

  // set curr node as head
  let curr = head;
  // while curr isn't null and curr.next isnt null,
  while (curr !== null && curr.next !== null) {
    // set check node to curr
    let checkingNode = curr;
    // while check node isn't null
    while (checkingNode.next !== null) {
      // if check node's val.next is the same as curr node.val, duplicate is found
      if (checkingNode.next.data === curr.data) {
        // link check node.next to next next
        checkingNode.next = checkingNode.next.next;
      } else {
        // else, move to next node
        checkingNode = checkingNode.next;
      }
    }
    // curr = curr.next
    curr = curr.next;
  }
  // return head
  return head;
}

// time complexity: O(n^2)
// space complexity: O(1)

// 2nd iteration
function removeDuplicates2(head) {
  if (head === null) return null;

  let curr = head;
  let prev = null;
  let values = new Set();

  while (curr !== null) {
    if (values.has(curr.data)) {
      prev.next = curr.next;
    } else {
      values.add(curr.data);
      prev = curr;
    }
    curr = curr.next;
  }
  return head;
}


// time complexity: O(n)
// space complexity: O(1)
