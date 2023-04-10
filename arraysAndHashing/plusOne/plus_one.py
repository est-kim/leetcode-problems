# You are given a large integer represented as an
# integer array digits, where each digits[i] is the ith
# digit of the integer. The digits are ordered from most
# significant to least significant in left-to-right order.
# The large integer does not contain any leading 0's.

# Increment the large integer by one and return the
# resulting array of digits.

def plus_one(digits):
    next_num = int(''.join(map(str, digits))) + 1
    new_arr = []
    for i in str(next_num):
        new_arr.append(int(i))
    return new_arr
