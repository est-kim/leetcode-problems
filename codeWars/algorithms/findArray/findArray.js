// DESCRIPTION:
// You are given two arrays arr1 and arr2, where arr2 always contains integers.

// Write a function such that:

// For arr1 = ['a', 'a', 'a', 'a', 'a'], arr2 = [2, 4] the function returns ['a', 'a']

// source: https://www.codewars.com/kata/59a2a3ba5eb5d4e609000055/javascript

function findArray(arr1, arr2){
    const res = [];
    console.log('arr1', arr1)
    console.log('arr2', arr2)
    for (let i = 0; i < arr2.length; i++) {
      if (arr2[i] >= 0 && arr2[i] < arr1.length) {
        res.push(arr1[arr2[i]])
      }
    }
    console.log('res', res)
    return res;
  }
