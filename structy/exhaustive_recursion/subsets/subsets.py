# Write a function, subsets, that takes in a list as an argument. The function should
# return a 2D list where each sublist represents one of the possible subsets of the
# list.

# The elements within the subsets and the subsets themselves may be returned in any
# order.

# You may assume that the input list contains unique elements.

def subsets(elements):
  if len(elements) == 0:
    return [[]]

  first = elements[0]
  without_first = subsets(elements[1:])

  with_first = []
  for element in without_first:
    with_first.append([first, *element])

  return with_first + without_first

# n = length of elements
# time: O(2^n)
# space: O(2^n)
