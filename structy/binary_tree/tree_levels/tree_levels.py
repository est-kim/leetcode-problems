# Write a function, tree_levels, that takes in the root of a binary tree.
# The function should return a 2-Dimensional list where each sublist represents
# a level of the tree.

class Node:
  def __init__(self, val):
    self.val = val
    self.left = None
    self.right = None

def tree_levels(root):
  levels = []
  fill_levels(root, levels, 0)
  return levels

def fill_levels(root, levels, level_num):
  if root is None:
    return
  if len(levels) == level_num:
    levels.append([root.val])
  else:
    levels[level_num].append(root.val)

  fill_levels(root.left, levels, level_num + 1)
  fill_levels(root.right, levels, level_num + 1)
