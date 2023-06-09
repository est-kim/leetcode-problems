// Rick wants a faster way to get the product of the largest pair in an array.
// Your task is to create a performant solution to find the product of the largest two
// integers in a unique array of positive numbers.
// All inputs will be valid.
// Passing [2, 6, 3] should return 18, the product of [6, 3].

// source: https://www.codewars.com/kata/5784c89be5553370e000061b/train/javascript


function maxProduct(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) max = arr[i]
    }
    arr.splice(arr.indexOf(max), 1)
    let max2 = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max2) max2 = arr[i]
    }
    return max * max2
  }
