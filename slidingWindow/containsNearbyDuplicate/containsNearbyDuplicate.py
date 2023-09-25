# Given an integer array nums and an integer k, return true if there are two
# distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

# source: https://leetcode.com/problems/contains-duplicate-ii

class Solution:
    def containsNearbyDuplicate(self, nums, k):
        index_map = {}

        for i, num in enumerate(nums):
            if num in index_map and abs(i - index_map[num]) <= k:
                return True
            index_map[num] = i

        return False

# n = length of nums, k = max distance
# time: O(n)
# space: O(min(n, k))
