# Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
# determine if the input string is valid.

# An input string is valid if:

# Open brackets must be closed by the same type of brackets.
# Open brackets must be closed in the correct order.
# Every close bracket has a corresponding open bracket of the same type.

class Solution:
    def isValid(self, s: str) -> bool:
        if len(s) % 2 != 0:
            return False

        stack = []
        pairs = {"}": "{", "]": "[", ")": "("}

        for i in s:
            if i in pairs:
                if not stack or stack.pop() != pairs[i]:
                    return False
            else:
                stack.append(i)

        return not stack

# time: O(n)
# space: O(n)
