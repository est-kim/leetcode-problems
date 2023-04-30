// You are given a 0-indexed integer array nums, where nums[i]
// represents the score of the ith student. You are also given
// an integer k.

// Pick the scores of any k students from the array so that
// the difference between the highest and the lowest of the
// k scores is minimized.

// Return the minimum possible difference.

// source: https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/

var minimumDifference = function(nums, k) {
    const n = nums.length;

    nums.sort((a, b) => a - b);

    let minDiff = Infinity;

    for (let i = 0; i <= n - k; i++) {
        const diff = nums[i + k - 1] - nums[i];
        if (diff < minDiff) {
            minDiff = diff;
        }
    }

    return minDiff;
};
