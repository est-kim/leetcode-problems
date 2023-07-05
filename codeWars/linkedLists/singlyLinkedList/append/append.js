source: //www.codewars.com/kata/55d17ddd6d7868493e000074/train/javascript

https: function Node(data) {
  this.data = data;
  this.next = null;
}

function append(listA, listB) {
  // if listA & listB are null, return null
  if (listA === null && listB === null) return null;
  // if listA is not null, and b is null, return A
  // vice versa
  if (listA === null) return listB;
  if (listB === null) return listA;

  let curr = listA;
  while (curr.next !== null) {
    curr = curr.next;
  }
  curr.next = listB;
  return listA;
}
