# Given an array arr, replace every element in that array with the greatest element among
# the elements to its right, and replace the last element with -1.

# After doing so, return the array.

class Solution:
    def replaceElements(self, arr):
        max_right = -1
        for i in range(len(arr) - 1, -1, -1):
            arr[i], max_right = max_right, max(arr[i], max_right)
        return arr

# time : O(n)
# space : O(1)
