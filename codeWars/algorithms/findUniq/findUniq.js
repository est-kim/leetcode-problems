// There is an array with some numbers. All numbers are equal except for one.
// Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

// source: https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

function findUniq(arr) {
    const obj = {};

    for (let i = 0; i < arr.length; i++) {
      if (obj[arr[i]] === undefined) {
        obj[arr[i]] = 1;
      } else if (obj[arr[i]]) {
        obj[arr[i]] += 1;
      } else if (obj[arr[i]] >= 2 && Object.keys(obj).length === 2) {
        break;
      }
    };

    for (let val in obj) {
      if (obj[val] === 1) {
        return parseFloat(val);
      }
    }
  }
