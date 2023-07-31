# Write a function, longest_path, that takes in an adjacency list for a directed
# acyclic graph. The function should return the length of the longest path within
# the graph. A path may start and end at any two nodes. The length of a path is
# considered the number of edges in the path, not the number of nodes.

# dfs - recursive!
def longest_path(graph):
  # store the keys as nodes, and values as distance
  distances = {}

  # store the terminal nodes in the dictionary as starting point
  for node in graph:
    if len(graph[node]) == 0:
      distances[node] = 0

  # loop over the graph, and use helper function to fill the rest of dict
  for node in graph:
    add_distance(graph, node, distances)

  return max(distances.values())

def add_distance(graph, node, distances):
  # create a base case
  if node in distances:
    return distances[node]

  current_distance = 0
  for neighbor in graph[node]:
    attempt = add_distance(graph, neighbor, distances)
    if attempt > current_distance:
      current_distance = attempt

  distances[node] = 1 + current_distance
  return distances[node]
