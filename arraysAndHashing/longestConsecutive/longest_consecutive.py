# source: https://leetcode.com/problems/longest-consecutive-sequence/

class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        # create set of elements in the array
        num_set = set(nums)
        # set a longest streak to 0
        longest_streak = 0

        # iterate through the elements of the array
        for num in nums:
            # if the current num is the start of a sequence, try to build sequence
            if num - 1 not in num_set:
                current_num = num
                current_streak = 1
                # try to extend the sequence while num + 1
                while current_num + 1 in num_set:
                    current_num += 1
                    current_streak += 1
                # update the longest streak if exists
                longest_streak = max(longest_streak, current_streak)

        # return the longest streak
        return longest_streak


# time: O(n)
# space: O(n)
