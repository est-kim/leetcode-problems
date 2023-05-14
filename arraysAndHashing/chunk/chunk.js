// Given an array arr and a chunk size size, return a chunked array.
// A chunked array contains the original elements in arr, but consists
// of subarrays each of length size. The length of the last subarray
// may be less than size if arr.length is not evenly divisible by size.

// You may assume the array is the output of JSON.parse. In other words,
// it is valid JSON.

// Please solve it without using lodash's _.chunk function.

// source: https://leetcode.com/problems/chunk-array/

var chunk = function(arr, size) {
    const res = [];
    while (arr.length !== 0) {
        let toPush = arr.splice(0, size);
        res.push(toPush);
    }
    return res;
};

// improved time complexity solution

var chunk2 = function(arr, size) {
    const res = [];
    let index = 0;

    while (index < arr.length) {
        res.push(arr.slice(index, index + size));
        index += size;
    }

    return res;
}
