# Write a function, semesters_required, that takes in a number of courses (n) and
# a list of prerequisites as arguments. Courses have ids ranging from 0 through n - 1.
# A single prerequisite of (A, B) means that course A must be taken before course B.
# Return the minimum number of semesters required to complete all n courses.
# There is no limit on how many courses you can take in a single semester, as long
# the prerequisites of a course are satisfied before taking it.

# Note that given prerequisite (A, B), you cannot take course A and course B
# concurrently in the same semester. You must take A in some semester before B.

# You can assume that it is possible to eventually complete all courses.

def semesters_required(num_courses, prereqs):
  graph = make_graph(num_courses, prereqs)

  distances = {}

  for course in graph:
    if len(graph[course]) == 0:
      distances[course] = 1

  for course in graph:
    traverse_distance(graph, course, distances)

  return max(distances.values())

def traverse_distance(graph, node, distances):
  # if the key is already in distances, return the distance
  if node in distances:
    return distances[node]

  max_dist = 0
  for neighbor in graph[node]:
    curr_dist = traverse_distance(graph, neighbor, distances)
    if curr_dist > max_dist:
      max_dist = curr_dist

  distances[node] = max_dist + 1
  return distances[node]

def make_graph(num_courses, prereqs):
  graph = {}

  for course in range(num_courses):
    graph[course] = []

  for prereq in prereqs:
    a, b = prereq
    graph[a].append(b)

  return graph


# time: O(p) - # of prereqs
# space: O(c) - # of courses
