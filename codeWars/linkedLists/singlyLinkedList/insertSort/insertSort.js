// source: https://www.codewars.com/kata/55d0c7ee7c0d30a12b000045/train/javascript

function Node(data) {
  this.data = data;
  this.next = null;
}

function insertSort(head) {
  // initialize new list
  let sorted = null;
  // initialize pointer
  let curr = head;

  while (curr !== null) {
    // store next for next iteration
    let next = curr.next;
    // insert curr in sorted linked list
    sorted = sortedInsert(sorted, curr);
    // update current
    curr = next;
  }

  return sorted;
}

function sortedInsert(head, node) {
  if (!head || node.data <= head.data) {
    node.next = head;
    return node;
  } else {
    let curr = head;
    while (curr.next && curr.next.data < node.data) {
      curr = curr.next;
    }
    node.next = curr.next;
    curr.next = node;
    return head;
  }
}
