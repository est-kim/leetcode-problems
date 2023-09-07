# Given a string text, you want to use the characters of text to form as many
# instances of the word "balloon" as possible.

# You can use each character in text at most once. Return the maximum number of
# instances that can be formed.

class Solution:
    def maxNumberOfBalloons(self, text: str) -> int:
        letter_count = {}
        for letter in text:
            if letter in "balloon":
                letter_count[letter] = letter_count.get(letter, 0) + 1
        count = 0

        return min(
            letter_count.get('b', 0),
            letter_count.get('a', 0),
            letter_count.get('l', 0) // 2,
            letter_count.get('o', 0) // 2,
            letter_count.get('n', 0)
        )


# space: O(n)
# time: O(1)
