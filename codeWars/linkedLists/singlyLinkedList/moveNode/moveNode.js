// source: https://www.codewars.com/kata/55da347204760ba494000038/train/javascript

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Context {
    constructor(source, dest) {
        this.source = source;
        this.dest = dest;
    }
}

function moveNode(source, dest) {
  // Check if the source list is empty
  if (source === null) {
    throw new Error("source list is empty");
  }

  // Store the next node in the source list
  let nextNode = source.next;

  // Move the head of the source list to the destination list
  source.next = dest;

  // Update source and dest to reflect the moved node
  dest = source;
  source = nextNode;

  return new Context(source, dest);
}
