// Given an integer array nums, return all the triplets [nums[i], nums[j],
// nums[k]] such that i != j, i != k, and j != k,
// and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// source: https://leetcode.com/problems/3sum/

var threeSum = function(nums) {
    nums.sort((a,b) => a - b);
    const triplets = [];

    for (let i = 0; i < nums.length - 2; i++) {
        // making sure result doesn't contain duplicate triplets
        if (nums[i] != nums[i-1]) {
            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                const currentSum = nums[i] + nums[left] + nums[right];
                if (currentSum === 0) {
                    triplets.push([nums[i], nums[left], nums[right]]);
                    // making sure result doesn't contain duplicate triplets
                    while (nums[left] === nums[left + 1]) left++;
                    while (nums[right] === nums[right - 1]) right--;
                    left++;
                    right--;
                } else if (currentSum < 0) {
                    left++;
                } else if (currentSum > 0) {
                    right--;
                }
            }
        }
    }

    return triplets;
};

// time complexity: O(n^2)
// sorting operation os O(n log n), but outer loop is O(n) because it
// iterates over the array once. The inner while loop worst case can
// iterate over the rest of the array so nested loop bcomes O(n^2)

// space complexity: O(n)
// due to creating another array where worst case, additional space used
// is proportional to length of n
