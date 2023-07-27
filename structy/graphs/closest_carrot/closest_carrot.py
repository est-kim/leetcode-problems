# Write a function, closest_carrot, that takes in a grid, a starting row, and a
# starting column. In the grid, 'X's are walls, 'O's are open spaces, and 'C's
# are carrots. The function should return a number representing the length of
# the shortest path from the starting position to a carrot. You may move up, down,
# left, or right, but cannot pass through walls (X). If there is no possible path
# to a carrot, then return -1.

from collections import deque

# bfs - iterative!
def closest_carrot(grid, starting_row, starting_col):
  visited = set([ (starting_row, starting_col) ])
  queue = deque([ (starting_row, starting_col, 0) ])

  while queue:
    # unpack set
    row, col, distance = queue.popleft()

    # check if point is a carrot, return distance
    if grid[row][col] == 'C':
      return distance

    # create list of deltas to iterate over for clean code
    deltas = [(1, 0), (-1, 0), (0, 1), (0, -1)]

    for delta in deltas:
      delta_row, delta_col = delta
      neighbor_row = row + delta_row
      neighbor_col = col + delta_col
      position = (neighbor_row, neighbor_col)
      row_inbound = 0 <= neighbor_row < len(grid)
      col_inbound = 0 <= neighbor_col < len(grid[0])

      if row_inbound and col_inbound and grid[neighbor_row][neighbor_col] != 'X' and position not in visited:
        visited.add(position)
        queue.append((neighbor_row, neighbor_col, distance + 1))

  return -1


# time: O(r*c) row * col
# space: O(r*c) row * col
