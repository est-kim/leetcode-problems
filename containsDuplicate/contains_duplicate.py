# Given an integer array nums, return true if any value
# appears at least twice in the array, and return false
# if every element is distinct.

def contains_duplicate(nums):
    obj = {}
    for i in nums:
        if i not in obj:
            obj[i] = 0
        elif obj[i] == 0:
            obj[i]+=1
            return True
    return False
