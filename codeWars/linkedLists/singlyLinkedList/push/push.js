// source: //www.codewars.com/kata/55be95786abade3c71000079/javascript

function Node(data) {
  this.data = data;
  this.next = null;
}

function push(head, data) {
  let newNode = new Node(data);
  // if there is no head, create a head
  if (head === null) {
    head = newNode;
  } else {
    // else, push the head to the next
    let temp = head;
    newNode.next = head;
    head = newNode;
  }
  return head;
}
// 3 -> null head: 3, head.next: null, temp: 3, newNode: 2
function buildOneTwoThree() {
  var chained = null;
  chained = push(chained, 3);
  chained = push(chained, 2);
  chained = push(chained, 1);
  return chained;
}
