# Write a function, tree_value_count, that takes in the root of a binary tree and
# a target value. The function should return the number of times that the target occurs
# in the tree.

class Node:
  def __init__(self, val):
    self.val = val
    self.left = None
    self.right = None

# dfs - iterative
def tree_value_count(root, target):
  if root is None: return 0
  stack = [root]
  count = 0

  while stack:
    curr = stack.pop()
    if curr.val == target:
      count += 1

    if curr.right is not None:
      stack.append(curr.right)

    if curr.left is not None:
      stack.append(curr.left)

  return count

#dfs - recursive
def tree_value_count2(root, target):
  if root is None:
    return 0

  if root.val == target:
    match = 1
  else:
    match = 0

  return match + tree_value_count(root.left, target) + tree_value_count(root.right, target)
