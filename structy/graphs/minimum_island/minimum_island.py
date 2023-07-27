# Write a function, minimum_island, that takes in a grid containing Ws and Ls.
# W represents water and L represents land. The function should return the size
# of the smallest island. An island is a vertically or horizontally connected
## region of land.

# You may assume that the grid contains at least one island.

def minimum_island(grid):
  visited = set()
  min = float('inf')

  for row in range(len(grid)):
    for col in range(len(grid[0])):
      size = find_island_size(grid, row, col, visited)
      if 0 < size < min:
        min = size

  return min

def find_island_size(grid, row, col, visited):
  size = 1

  row_inbounds = 0 <= row < len(grid)
  col_inbounds = 0 <= col < len(grid[0])

  if not row_inbounds or not col_inbounds:
    return 0

  if grid[row][col] == 'W':
    return 0

  position = (row, col)

  if position in visited:
    return 0

  visited.add(position)

  down = find_island_size(grid, row + 1, col, visited)
  up = find_island_size(grid, row - 1, col, visited)
  right = find_island_size(grid, row, col + 1, visited)
  left = find_island_size(grid, row, col - 1, visited)

  return size + down + up + right + left
