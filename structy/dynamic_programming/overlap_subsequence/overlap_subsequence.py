# Write a function, overlap_subsequence, that takes in two strings as arguments.
# The function should return the length of the longest overlapping subsequence.

# A subsequence of a string can be created by deleting any characters of the string,
# while maintaining the relative order of characters.

def overlap_subsequence(string_1, string_2):
  return _overlap_subsequence(string_1, string_2, 0, 0, {})

def _overlap_subsequence(string_1, string_2, s1_i, s2_i, memo):
  key = (s1_i, s2_i)
  if key in memo:
    return memo[key]

  if s1_i == len(string_1) or s2_i == len(string_2):
    return 0

  if string_1[s1_i] == string_2[s2_i]:
    memo[key] = 1 + _overlap_subsequence(string_1, string_2, s1_i + 1, s2_i + 1, memo)
  else:
    memo[key] = max(
      _overlap_subsequence(string_1, string_2, s1_i + 1, s2_i, memo),
      _overlap_subsequence(string_1, string_2, s1_i, s2_i + 1, memo)
    )
  return memo[key]

# n = length of str1, m = length of str2
# time: O(n*m)
# space: O(n*m)
