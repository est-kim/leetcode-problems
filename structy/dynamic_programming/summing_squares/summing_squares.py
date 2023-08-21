# Write a function, summing_squares, that takes a target number as an argument.
# The function should return the minimum number of perfect squares that sum to the target.
# A perfect square is a number of the form (i*i) where i >= 1.

# For example: 1, 4, 9, 16 are perfect squares, but 8 is not perfect square.


import math

def summing_squares(n):
  return _summing_squares(n, {})

def _summing_squares(n, memo):
  if n in memo:
    return memo[n]

  if n == 0:
    return 0

  min_squares = float('inf')
  for i in range(1, math.floor(math.sqrt(n)) + 1):
    square = i * i
    num_squares = 1 + _summing_squares(n - square, memo)
    min_squares = min(num_squares, min_squares)

  memo[n] = min_squares

  return memo[n]


# time: O(n * sqrt(n))
# space: O(n)
