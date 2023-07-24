# Write a function, how_high, that takes in the root of a binary tree.
# The function should return a number representing the height of the tree.

# The height of a binary tree is defined as the maximal number of edges from
# the root node to any leaf node.

# If the tree is empty, return -1.

class Node:
  def __init__(self, val):
    self.val = val
    self.left = None
    self.right = None

def how_high(node):
  if node is None:
    return -1

  left_vals = how_high(node.left)
  right_vals = how_high(node.right)

  return 1 + max(left_vals, right_vals)

# time complexity: O(n)
# space complexity: O(n)
