# You are keeping the scores for a baseball game with strange rules. At the beginning of the game,
# you start with an empty record.

# You are given a list of strings operations, where operations[i] is the ith operation you must
# apply to the record and is one of the following:

# An integer x.
# Record a new score of x.
# '+'.
# Record a new score that is the sum of the previous two scores.
# 'D'.
# Record a new score that is the double of the previous score.
# 'C'.
# Invalidate the previous score, removing it from the record.
# Return the sum of all the scores on the record after applying all the operations.

# source: https://leetcode.com/problems/baseball-game/description/

class Solution:
    def calPoints(self, operations: List[str]) -> int:
        stack = []

        for i in operations:
            if i == "C":
                stack.pop()
            elif i == "D":
                stack.append(stack[-1] * 2)
            elif i == "+":
                n1 = stack[-2]
                n2 = stack[-1]
                stack.append(n1 + n2)
            else:
                stack.append(int(i))

        return sum(stack)

# time: O(n)
# space: O(n)
