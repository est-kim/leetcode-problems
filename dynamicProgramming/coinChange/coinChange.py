# You are given an integer array coins representing coins of different
# denominations and an integer amount representing a total amount of money.

# Return the fewest number of coins that you need to make up that amount.
# If that amount of money cannot be made up by any combination of the coins, return -1.

# You may assume that you have an infinite number of each kind of coin.

# source: https://leetcode.com/problems/coin-change

class Solution:
    def coinChange(self, coins, amount):
        res = self._coinChange(coins, amount, {})
        return -1 if res == float('inf') else res

    def _coinChange(self, coins, amount, memo):
        if amount in memo:
            return memo[amount]

        if amount == 0:
            return 0

        if amount < 0:
            return float('inf')

        min_coins = float('inf')
        for coin in coins:
            min_coins = min(self._coinChange(coins, amount - coin, memo) + 1, min_coins)

        memo[amount] = min_coins
        return min_coins

# c = length of coins
# time: O(c * amount)
# space: O(c * amount)
