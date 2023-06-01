// Given an unsorted array of integers nums, return the length of the longest
// consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// source: https://leetcode.com/problems/longest-consecutive-sequence/

// brute force first iteration
var longestConsecutive = function(nums) {
    nums.sort((a, b) => a - b);
    console.log(nums)

    let p1 = 0;
    let p2 = 1;

    const arr = [];
    let count = 1;
    while (p2 < nums.length) {
        if (nums[p2] - nums[p1] === 1) {
            count++;
            p1++
            p2++;
        } else if (nums[p2] - nums[p1] === 0) {
            p1++;
            p2++;
        } else if (nums[p2] - nums[p1] > 1 || p2 === nums.length) {
            arr.push(count);
            count = 0;
            p1 = p2
            p2++;
        }
        // console.log(p1, 'p1')
        // console.log(p2, 'p2')
    }
    if (arr.length === 0) return count;
    return Math.max(...arr)
};
