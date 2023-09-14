# Write a function, befitting_brackets, that takes in a string as an argument.
# The function should return a boolean indicating whether or not the string
# contains correctly matched brackets.

# You may assume the string contains only characters: ( ) [ ] { }


def befitting_brackets(string):
  stack = []
  brackets = {'}': '{', ')': '(', ']': '['}

  for char in string:
    if char in brackets:
      if not stack or stack.pop() != brackets[char]:
        return False
    else:
      stack.append(char)

  return not stack

# time: O(n)
# space: O(n)
