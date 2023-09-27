# Given a positive integer num, return true if num is a perfect square or false otherwise.

# A perfect square is an integer that is the square of an integer. In other words, it is the
# product of some integer with itself.

# You must not use any built-in library function, such as sqrt.

# source: https://leetcode.com/problems/valid-perfect-square/description/


class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        if num == 1:
            return True

        low = 1
        high = num
        while low <= high:
            mid = (low + high) // 2
            square = mid * mid
            if square > num:
                high = mid - 1
            elif square < num:
                low = mid + 1
            else:
                return True

        return False


# time: O(n log n)
# space: O(1)
