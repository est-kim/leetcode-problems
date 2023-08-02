# Write a function, prereqs_possible, that takes in a number of courses (n) and
# prerequisites as arguments. Courses have ids ranging from 0 through n - 1. A single
# prerequisite of (A, B) means that course A must be taken before course B.
# The function should return a boolean indicating whether or not it is possible
# to complete all courses.

def prereqs_possible(num_courses, prereqs):
  graph = make_graph(num_courses, prereqs)
  visiting = set()
  visited = set()

  for node in graph:
    if cycle_detect(graph, node, visiting, visited):
      return False

  return True

def cycle_detect(graph, node, visiting, visited):
  if node in visited:
    return False

  if node in visiting:
    return True

  visiting.add(node)

  for neighbor in graph[node]:
    if cycle_detect(graph, neighbor, visiting, visited) == True:
      return True

  visiting.remove(node)
  visited.add(node)

def make_graph(num_courses, prereqs):
  graph = {}

  for course in range(num_courses):
    graph[course] = []

  for a, b in prereqs:
    graph[a].append(b)

  return graph

# time: O(n + p) - # of courses and prereqs
# space: O(n) - # of courses
