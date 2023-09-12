# Write a function, decompress_braces, that takes in a compressed string as an
# argument. The function should return the string decompressed.

# The compression format of the input string is 'n{sub_string}', where the
# sub_string within braces should be repeated n times.

# You may assume that every number n is guaranteed to be an integer between 1
# through 9.

# You may assume that the input is valid and the decompressed string will only
# contain alphabetic characters.

def decompress_braces(string):
  stack = []
  numbers = '123456789'

  for char in string:
    if char in numbers:
      stack.append(int(char))
    else:
      if char == '}':
        segment = ''
        while isinstance(stack[-1], str):
          popped = stack.pop()
          segment = popped + segment
        num = stack.pop()
        stack.append(num * segment)
      elif char != '{':
        stack.append(char)

  return ''.join(stack)

# m = number of brace pairs
# s = length of string
# time: O(9^m * s)
# space: O(9^m * s)
