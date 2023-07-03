// source: https://www.codewars.com/kata/55beec7dd347078289000021/train/javascript

function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  // if no head, return 0
  if (head === null) return 0;
  // initialize length to 0
  let length = 0;
  // while head is not null, increment count
  while (head !== null) {
    head = head.next;
    length++;
  }
  return length;
}

function count(head, data) {
  if (head === null) return 0;
  let counts = 0;
  while (head !== null) {
    if (head.data === data) {
      counts++;
    }
    head = head.next;
  }
  return counts++;
}
