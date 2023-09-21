# Write a function, paired_parentheses, that takes in a string as an argument. The function should
# return a boolean indicating whether or not the string has well-formed parentheses.

# You may assume the string contains only alphabetic characters, '(', or ')'.

def paired_parentheses(string):
  count = 0

  for char in string:
    if char == '(':
      count += 1
    elif char == ')':
      if count == 0:
        return False
      count -= 1

  return count == 0

# time: O(n)
# space: O(1)
