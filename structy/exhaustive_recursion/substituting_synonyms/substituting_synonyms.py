# Write a function, substituting_synonyms, that takes in a sentence and a dictionary
# as arguments. The dictionary contains words as keys whose values are arrays containing
# synonyms. The function should return an array containing all possible sentences that
# can be formed by substituting words of the sentence with their synonyms.

# You may return the possible sentences in any order, as long as you return all of them.

def substitute_synonyms(sentence, synonyms):
  words = sentence.split(' ')
  subarrays = generate(words, synonyms)
  return [ ' '.join(subarray) for subarray in subarrays ]

def generate(words, synonyms):
  if len(words) == 0:
    return [[]]

  first_word = words[0]
  remaining_words = words[1:]

  subarrays = generate(remaining_words, synonyms)

  if first_word in synonyms:
    result = []
    for synonym in synonyms[first_word]:
      result += [ [synonym, *subarray] for subarray in subarrays ]
    return result
  else:
    return [ [first_word, *subarray] for subarray in subarrays ]

# n = number of words in sentence
# m = max number of synonyms for a word
# time: O(n^m)
# space: O(n^m)
