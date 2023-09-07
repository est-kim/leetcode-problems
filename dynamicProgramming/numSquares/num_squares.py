# Given an integer n, return the least number of perfect square numbers that sum to n.

# A perfect square is an integer that is the square of an integer; in other words, it is
# the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares
# while 3 and 11 are not.

# source: https://leetcode.com/problems/perfect-squares/description/


from math import sqrt, floor

class Solution:
    def numSquares(self, n: int) -> int:
        return self._numSquares(n, {})

    def _numSquares(self, n, memo):
        if n in memo:
            return memo[n]

        if n == 0:
            return 0

        min_num = float('inf')
        for i in range(1, floor(sqrt(n)) + 1):
            square = i * i
            attempt = 1 + self._numSquares(n - square, memo)
            min_num = min(attempt, min_num)

            if min_num == 1:
                break

        memo[n] = min_num
        return min_num


# time: O(n*sqrt(n))
# space: O(n)
