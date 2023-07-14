class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

def merge_lists(head_1, head_2):
  current1 = head_1
  current2 = head_2
  dummy_head = Node(None)
  tail = dummy_head

  while current1 is not None and current2 is not None:
    if current1.val < current2.val:
      tail.next = current1
      current1 = current1.next
    elif current2.val <= current1.val:
      tail.next = current2
      current2 = current2.next
    tail = tail.next

  if current1 is not None: tail.next = current1
  if current2 is not None: tail.next = current2

  return dummy_head.next


time complexity: O(min(n,m))
space complexity: O(1)
