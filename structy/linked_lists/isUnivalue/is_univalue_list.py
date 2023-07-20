# Write a function, is_univalue_list, that takes in the head of a linked list as an argument.
# The function should return a boolean indicating whether or not the linked list contains
# exactly one unique value.

# You may assume that the input list is non-empty.

class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

def is_univalue_list(head):
  value = head.val
  curr = head

  while curr is not None:
    if curr.val != value:
      return False
    curr = curr.next

  return True

# time complexity: O(n)
# space complexity: O(1)
