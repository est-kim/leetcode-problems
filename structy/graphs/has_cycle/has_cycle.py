# Write a function, has_cycle, that takes in an object representing the adjacency list
# of a directed graph. The function should return a boolean indicating whether or not
# the graph contains a cycle.

# dfs - recursive white grey black method

def has_cycle(graph):
  visiting = set()
  visited = set()

  for node in graph:
    if cycle_detect(graph, node, visiting, visited) == True:
      return True

  return False

def cycle_detect(graph, node, visiting, visited):
  if node in visiting:
    return True

  if node in visited:
    return False

  visiting.add(node)

  for neighbor in graph[node]:
    if cycle_detect(graph, neighbor, visiting, visited) == True:
      return True

  visiting.remove(node)
  visited.add(node)

  return False

# time: O(e)
# space: O(n)
