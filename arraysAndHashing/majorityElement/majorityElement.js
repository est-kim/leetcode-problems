// Given an array nums of size n, return
// the majority element.

// The majority element is the element that appears
// more than ⌊n / 2⌋ times. You may assume that the
// majority element always exists in the array.

// source: https://leetcode.com/problems/majority-element/

var majorityElement = function(nums) {
    let obj = {};
    for (let i of nums) {
        obj[i] = (obj[i] || 0) + 1;
    }
    for (let key in obj) {
        if (obj[key] > nums.length/2) {
            return key;
        }
    }
};
