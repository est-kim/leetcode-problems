# Write a function, island_count, that takes in a grid containing Ws and Ls.
# W represents water and L represents land. The function should return the number
# of islands on the grid. An island is a vertically or horizontally connected
## region of land.

def island_count(grid):
  visited = set()
  count = 0

  for row in range(len(grid)):
    for col in range(len(grid[0])):
      if explore(grid, row, col, visited) == True:
        count += 1

  return count

def explore(grid, row, col, visited):
  # check if in bounds
  row_inbounds = 0 <= row < len(grid)
  col_inbounds = 0 <= col < len(grid[0])

  if not row_inbounds or not col_inbounds:
    return False

  if grid[row][col] == "W":
    return False

  position = (row, col)
  if position in visited:
    return False

  visited.add(position)

  explore(grid, row - 1, col, visited)
  explore(grid, row + 1, col, visited)
  explore(grid, row, col - 1, visited)
  explore(grid, row, col + 1, visited)

  return True
