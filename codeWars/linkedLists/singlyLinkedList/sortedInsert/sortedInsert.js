// source: https://www.codewars.com/kata/55cc33e97259667a08000044/train/javascript

function Node(data) {
  this.data = data;
  this.next = null;
}

function sortedInsert(head, data) {
  let newNode = new Node(data);
  if (head === null) {
    head = newNode;
    return head;
  }
  if (newNode.data < head.data) {
    newNode.next = head;
    head = newNode;
    return head;
  }
  let current = head;
  while (current.next !== null && current.next.data < newNode.data) {
    current = current.next;
  }
  newNode.next = current.next;
  current.next = newNode;
  return head;
}
