// source: https://www.codewars.com/kata/55befc42bfe4d13ab1000007/train/javascript

function Node(data) {
  this.data = data;
  this.next = null;
}

function getNth(node, index) {
  if (node === null) throw new Error("null");
  let traversed = 0;
  while (traversed <= index) {
    if (traversed === index) {
      return node;
    } else {
      node = node.next;
      traversed++;
      if (node === null) throw new Error("index out of range");
    }
  }
}
