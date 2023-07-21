from collections import deque

class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

def breadth_first_values(root):
    if root is None:
        return []

    res = []
    queue = deque([root])

    while queue:
        curr = queue.popleft()
        res.append(curr.val)

        if curr.left is not None:
            queue.append(curr.left)
        if curr.right is not None:
            queue.append(curr.right)

    return res

# time complexity: O(n) due to constant time from using deque library
# space complexity: O(n) due to creating a new list containing n # of nodes
