# source: https://leetcode.com/problems/move-zeroes/

class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        if len(nums) == 1: return nums

        zero = 0
        non_zero = 0

        while non_zero <= (len(nums) - 1):
            if nums[non_zero] != 0:
                nums[zero], nums[non_zero] = nums[non_zero], nums[zero]
                zero += 1
            non_zero += 1

        return nums

## time complexity: O(n)
## space complexity: O(1)
