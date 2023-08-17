# You are climbing a staircase. It takes n steps to reach the top.

# Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb
# to the top?


class Solution(object):
    def climbStairs(self, n):
        """
        :type n: int
        :rtype: int
        """
        return _climbStairs(n, {})

def _climbStairs(n, memo):
    if n in memo:
        return memo[n]

    if n <= 0:
        return 0
    if n == 1:
        return 1
    if n == 2:
        return 2

    one_step = _climbStairs(n - 1, memo)
    two_step = _climbStairs(n - 2, memo)

    memo[n] = one_step + two_step
    return memo[n]

# time: O(n)
# space: O(n)
