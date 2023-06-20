// This challenge is an extension of the kata of Codewars: Missing and Duplicate Number",
// authored by the user Uraza. (You may search for it and complete it if you have not
//     done it)

// In this kata, we have an unsorted sequence of consecutive numbers from a to b, such
// that a < b always (remember a, is the minimum, and b the maximum value).

// They were introduced an unknown amount of duplicates in this sequence and we know
// that there is an only missing value such that all the duplicate values and the
// missing value are between a and b, but never coincide with them.

// Find the missing number with the duplicate numbers (duplicates should be output
//     in a sorted array).

// Let's see an example:
// arr = [10,9,8,9,6,1,2,4,3,2,5,5,3]
// find_dups_miss([10,9,8,9,6,1,2,4,3,2,5,5,3]) == [7,[2,3,5,9]]
// The code should be fast to process long arrays (maximum length aprox. = 1.000.000).

// source: https://www.codewars.com/kata/5a5cdb07fd56cbdd3c00005b/train/javascript

function findDupsMiss(arr) {
  const res = [];
  const duplicates = [];
  const set = new Set(arr);
  const obj = {};
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  }

  for (let val in obj) {
    if (obj[val] > 1) {
      duplicates.push(parseInt(val));
    }
  }
  let start = arr[0];
  while (start < arr[arr.length - 1]) {
    if (!set.has(start)) {
      res.push(start);
    }
    start++;
  }

  res.push(duplicates);
  return res;
}

// time complexity: O(n log n)
// space complexity: O(n)
