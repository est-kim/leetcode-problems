# You are given an integer array nums and an integer target.

# You want to build an expression out of nums by adding one of the symbols '+' and '-'
# before each integer in nums and then concatenate all the integers.

# For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and
# concatenate them to build the expression "+2-1".

# Return the number of different expressions that you can build, which evaluates to target.

# source: https://leetcode.com/problems/target-sum


class Solution:
    def findTargetSumWays(self, nums: int, target: int) -> int:
        return self._findTargetSumWays(nums, target, 0, 0, {})

    def _findTargetSumWays(self, nums: int, target: int, curr_sum: int, index: int, memo: dict) -> int:
        key = (curr_sum, index)
        if key in memo:
            return memo[key]

        if index == len(nums):
            return 1 if curr_sum == target else 0

        count = 0
        pos_num = curr_sum + nums[index]
        neg_num = curr_sum - nums[index]
        pos_choice = self._findTargetSumWays(nums, target, pos_num, index + 1, memo)
        neg_choice = self._findTargetSumWays(nums, target, neg_num, index + 1, memo)
        count += pos_choice + neg_choice

        memo[key] = count
        return memo[key]

# n = length of nums
# time: O(n * sum(nums))
# space: O(n * sum(nums))
