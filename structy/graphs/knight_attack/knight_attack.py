# A knight and a pawn are on a chess board. Can you figure out the minimum number of moves
# required for the knight to travel to the same position of the pawn? On a single move,
# the knight can move in an "L" shape; two spaces in any direction, then one space in a
# perpendicular direction. This means that on a single move, a knight has eight possible
# positions it can move to.

# Write a function, knight_attack, that takes in 5 arguments:

# n, kr, kc, pr, pc

# n = the length of the chess board
# kr = the starting row of the knight
# kc = the starting column of the knight
# pr = the row of the pawn
# pc = the column of the pawn
# The function should return a number representing the minimum number of moves required
# for the knight to land ontop of the pawn. The knight cannot move out-of-bounds of the
# board. You can assume that rows and columns are 0-indexed. This means that if n = 8,
# there are 8 rows and 8 columns numbered 0 to 7. If it is not possible for the knight
# to attack the pawn, then return None.

# bfs - iterative with recursive
from collections import deque

def knight_attack(n, kr, kc, pr, pc):
  knight_positions = set([(kr, kc)])

  for row in range(n):
    for col in range(n):
      find_knight_positions(n, kr, kc, pr, pc, knight_positions)

  queue = deque([])
  for knight_pos in knight_positions:
    k_row, k_col = knight_pos
    queue.append((k_row, k_col, 1))

  while queue:
    k_row, k_col, move_num = queue.popleft()
    if (k_row, k_col) == (pr, pc):
      return move_num

    deltas = [(2, 1), (2, -1), (1, -2), (1, 2), (-1, 2), (-2, -1), (-1, -2), (-2, 1)]
    for delta in deltas:
      d_row, d_col = delta
      neighbor_row = d_row + k_row
      neighbor_col = d_col + k_col
      neighbor_pos = (neighbor_row, neighbor_col)
      if neighbor_pos not in knight_positions and inbounds(n, neighbor_row, neighbor_col):
        queue.append((neighbor_row, neighbor_col, move_num + 1))
        knight_positions.add(neighbor_pos)

  return None

def inbounds(n, row, col):
  row_inbounds = 0 <= row < n
  col_inbounds = 0 <= col < n

  return row_inbounds and col_inbounds

def find_knight_positions(n, kr, kc, pr, pc, knight_positions):
  k_pos = (kr, kc)

  if not inbounds(n, kr, kc):
    return knight_positions

  if k_pos not in knight_positions:
    return knight_positions

  knight_positions.add((kr, kc))

  deltas = [(2, 1), (2, -1), (1, -2), (1, 2), (-1, 2), (-2, -1), (-1, -2), (-2, 1)]
  for delta in deltas:
    d_row, d_col = delta
    neighbor_row = d_row + kr
    neighbor_col = d_col + kc
    neighbor_pos = (neighbor_row, neighbor_col)
    if neighbor_pos not in knight_positions and inbounds(n, neighbor_row, neighbor_col):
      find_knight_positions(n, neighbor_row, neighbor_col, pr, pc, knight_positions)
      knight_positions.add(neighbor_pos)

  return knight_positions
  