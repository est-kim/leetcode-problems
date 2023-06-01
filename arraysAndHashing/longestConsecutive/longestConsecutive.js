// Given an unsorted array of integers nums, return the length of the longest
// consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// source: https://leetcode.com/problems/longest-consecutive-sequence/

// second iteration
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;

    nums.sort((a, b) => a - b);
    console.log(nums)

    let p1 = 0;
    let p2 = 1;
    let count = 1;
    const arr = [];

    // let count = 1;
    while (p2 < nums.length) {

        // if p2 is 1+ than p1
        if (nums[p2] - nums[p1] === 1) {
            p1++
            p2++;
            count++
        // if p2 is same as p1
        } else if (nums[p2] - nums[p1] === 0) {
            p1++;
            p2++;
        // if p2 is bigger than p1
        } else if (nums[p2] - nums[p1] > 1 || p2 === nums.length) {
            arr.push(count)
            count = 1;
            p1 = p2
            p2++;
        }
    }

    if (count > 0) {
        arr.push(count)
    }

    return Math.max(...arr)
};

// space complexity: O(n log n) due to sorting
// time complexity: O(n) due to array 
