# Given two strings needle and haystack, return the index of the first occurrence of needle
# in haystack, or -1 if needle is not part of haystack.

# https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

class Solution(object):
    def strStr(self, haystack, needle):
        """
        :type haystack: str
        :type needle: str
        :rtype: int
        """
        h1 = 0
        n1 = 0
        start = 0

        while h1 < len(haystack):
            if haystack[h1] == needle[n1]:
                if n1 == len(needle) - 1:
                    return start
                h1 += 1
                n1 += 1
            else:
                start += 1
                h1 = start
                n1 = 0

        return -1

# n = length of haystack
# time: O(n)
# space: O(1)
