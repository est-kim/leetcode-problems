def get_node_value(head, index):
  curr = head
  i = 0

  while curr is not None:
    if i == index:
      return curr.val
    i += 1
    curr = curr.next

  return None
