# Given an array of distinct integers nums and a target integer target, return the
# number of possible combinations that add up to target.

# The test cases are generated so that the answer can fit in a 32-bit integer.

# source: https://leetcode.com/problems/combination-sum-iv/

class Solution:
    def combinationSum4(self, nums: int, target: int) -> int:
        return self._combinationSum4(nums, target, {})

    def _combinationSum4(self, nums: int, target: int, memo: dict) -> int:
        if target in memo:
            return memo[target]

        if target == 0:
            return 1

        if target < 0:
            return 0

        count = 0
        for num in nums:
            count += self._combinationSum4(nums, target - num, memo)

        memo[target] = count
        return count

# t = target, n = length of nums
# time: O(n * t)
# space: O(t)
