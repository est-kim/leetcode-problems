// Given an integer array nums, move all 0's to the end of it while
// maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy
// of the array.

// source: https://leetcode.com/problems/move-zeroes/

var moveZeroes = function (nums) {
  let zeroPointer = 0;
  let nonZeroPointer = 0;

  while (nonZeroPointer < nums.length) {
    if (nums[nonZeroPointer] !== 0) {
      [nums[zeroPointer], nums[nonZeroPointer]] = [
        nums[nonZeroPointer],
        nums[zeroPointer],
      ];
      zeroPointer++;
    }
    nonZeroPointer++;
  }

  return nums;
};
