// source: https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript

function findEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    let leftSum = 0;
    let rightSum = 0;

    // calculate left sum
    for (let j = 0; j < i; j++) {
      leftSum += arr[j];
    }

    // calculate right sum
    for (let j = i + 1; j < arr.length; j++) {
      rightSum += arr[j];
    }

    // check if left sum equals to right sum
    if (leftSum === rightSum) {
      return i;
    }
  }

  // return -1 if no index was found
  return -1;
}

// time complexity: 0(n^2)
// space complexity: O(1)
