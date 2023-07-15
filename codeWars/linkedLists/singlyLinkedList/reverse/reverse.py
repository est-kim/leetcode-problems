def reverse_list(head):
  curr = head
  prev = None

  while curr is not None:
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  return prev

# time complexity: O(n)
# space complexity: O(1)
