# Write a function, quickest_concat, that takes in a string and a list of words as arguments.
# The function should return the minimum number of words needed to build the string by
# concatenating words of the list.

# You may use words of the list as many times as needed.

def quickest_concat(s, words):
  result = _quickest_concat(s, words, {})
  if result == float('inf'):
    return -1
  else:
    return result

def _quickest_concat(s, words, memo):
  if s in memo:
    return memo[s]

  if s == '':
    return 0

  min_words = float('inf')
  for word in words:
    if s.startswith(word):
      suffix = s[len(word):]
      attempt = 1 + _quickest_concat(suffix, words, memo)
      min_words = min(attempt, min_words)

  memo[s] = min_words
  return min_words

# s = length of string, w = # of words
# space: O(sw)
# time: O(s)
