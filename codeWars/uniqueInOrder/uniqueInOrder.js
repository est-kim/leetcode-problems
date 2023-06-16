// Implement the function unique_in_order which takes as argument a sequence and returns a list of items
// without any elements with the same value next to each other and preserving the original order of elements.

// For example:
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// source: https://www.codewars.com/kata/54e6533c92449cc251001667/

var uniqueInOrder = function (iterable) {
  const res = [];
  let p1 = 0;
  let p2 = 1;

  while (p2 <= iterable.length) {
    // if p1 and p2 are the same & p1 isnt in res or res is empty, push p1
    if (
      (iterable[p1] === iterable[p2] && res[res.length - 1] !== iterable[p1]) ||
      res.length === 0
    ) {
      res.push(iterable[p1]);
      // if p1 and p2 r diff & p1 isnt in res or res is empty, push p1
    } else if (
      (iterable[p2] !== iterable[p1] && iterable[p1] !== res[res.length - 1]) ||
      res.length === 0
    ) {
      res.push(iterable[p1]);
    }
    p1++;
    p2++;
  }
  return res;
};

//time complexity: O(n)
//space complexity: O(n)
