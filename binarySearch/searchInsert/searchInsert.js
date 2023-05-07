// Given a sorted array of distinct integers and a target value,
// return the index if the target is found. If not, return the index
// where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// source: https://leetcode.com/problems/search-insert-position/

var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (target > nums[middle]) {
            left = middle + 1;
        } else if (target < nums[middle]) {
            right = middle - 1;
        } else {
            return middle;
        }
    }
    return left;
};
