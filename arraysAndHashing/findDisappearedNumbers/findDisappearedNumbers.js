// Given an array nums of n integers where nums[i] is in
// the range [1, n], return an array of all the integers
// in the range [1, n] that do not appear in nums.

// source: https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/


const findDisappearedNumbers = function(nums) {
    let arr = [];
    let lastNum = nums.length;
    let set = new Set(nums)
    let newNums = Array.from(set)
    while (lastNum > 0) {
        if (newNums.indexOf(lastNum) === -1) {
            arr.push(lastNum);
        }
        lastNum--;
    }
    return arr;
};
