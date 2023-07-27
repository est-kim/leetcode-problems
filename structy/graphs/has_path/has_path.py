# Write a function, has_path, that takes in a dictionary representing the adjacency
# list of a directed acyclic graph and two nodes (src, dst). The function should return
# a boolean indicating whether or not there exists a directed path between the source
# and destination nodes.


# dfs - iterative
def has_path_1(graph, src, dst):
  stack = [src]

  while stack:
    current = stack.pop()
    for node in graph[current]:
      if node == dst:
        return True
      stack.append(node)

  return False

# dfs - recursive
def has_path_2(graph, src, dst):
  if src == dst:
    return True

  for neighbor in graph[src]:
    if has_path_2(graph, neighbor, dst) == True:
      return True

  return False

# bfs - iterative
from collections import deque

def has_path_3(graph, src, dst):
  queue = deque([src])

  while queue:
    current = queue.popleft()
    if neighbor == dst:
        return True
    for neighbor in graph[current]:
      queue.append(neighbor)

  return False

# time: O(e) # of edges
# space: O(n) # of nodes
