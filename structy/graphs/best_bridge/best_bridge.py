# Write a function, best_bridge, that takes in a grid as an argument. The grid
# contains water (W) and land (L). There are exactly two islands in the grid.
# An island is a vertically or horizontally connected region of land. Return
# the minimum length bridge needed to connect the two islands. A bridge does
# not need to form a straight line.

# approach:
# Write a breadth first function to find the distance
# between the 1st found island and the 2nd island.

# Use a helper function to be able to use it globally
# to check if the row and col are inbounds.

# Write a depth first recursive function to traverse over
# the over the grid to save the first found island into a
# set to access in our BFS function so that we can find
# the distance from that 1st island to the 2nd island.
from collections import deque

def best_bridge(grid):
  first_island = None

  for row in range(len(grid)):
    for col in range(len(grid[0])):
      potential_island = traverse_grid(grid, row, col, set())
      if len(potential_island) > 0:
        first_island = potential_island

  visited = set(first_island)

  queue = deque([])
  for pos in first_island:
    row, col = pos
    queue.append((row, col, 0))

  while queue:
    row, col, distance = queue.popleft()
    if (row, col) not in first_island and grid[row][col] == 'L':
      return distance - 1

    deltas = [(1, 0), (-1, 0), (0, 1), (0, -1)]

    for delta in deltas:
      delta_row, delta_col = delta
      neighbor_row = row + delta_row
      neighbor_col = col + delta_col
      neighbor_pos = (neighbor_row, neighbor_col)
      if neighbor_pos not in visited and in_bounds(grid, neighbor_row, neighbor_col):
        queue.append((neighbor_row, neighbor_col, distance + 1))
        visited.add(neighbor_pos)


def in_bounds(grid, row, col):
  row_inbounds = 0 <= row < len(grid)
  col_inbounds = 0 <= col < len(grid[0])

  return row_inbounds and col_inbounds

def traverse_grid(grid, row, col, visited):
  if not in_bounds(grid, row, col) or grid[row][col] == 'W':
    return visited

  position = (row, col)
  if position in visited:
    return visited

  visited.add(position)

  traverse_grid(grid, row + 1, col, visited)
  traverse_grid(grid, row - 1, col, visited)
  traverse_grid(grid, row, col + 1, visited)
  traverse_grid(grid, row, col - 1, visited)

  return visited




  