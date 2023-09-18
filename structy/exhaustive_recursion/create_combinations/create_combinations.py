# Write a function, create_combinations, that takes in a list and a length as arguments.
# The function should return a 2D list representing all of the combinations of the
# specifized length.

# The items within the combinations and the combinations themselves may be returned
# in any order.

# You may assume that the input list contains unique elements and 1 <= k <= len(items).

def create_combinations(items, k):
  if k > len(items):
    return []

  if k == 0:
    return [[]]

  first = items[0]

  partial_combos = create_combinations(items[1:], k - 1)

  combos_with_first = []

  for combo in partial_combos:
    combos_with_first.append([first, *combo])

  combos_without_first = create_combinations(items[1:], k)

  return combos_with_first + combos_without_first

# n = length of items
# k = target length
# time: O(n choose k)
# space: O(n choose k)
# n choose k = binomial coefficient
