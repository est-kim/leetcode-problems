# Given two strings s and t, return true if t
# is an anagram of s, and false otherwise

def is_anagram(s, t):
    if (len(s) != len(t)):
        return False

    dict_s = {}
    dict_t = {}

    for i in s:
        if i not in dict_s:
            dict_s[i] = 0
        dict_s[i] += 1

    for j in t:
        if j not in dict_t:
            dict_t[j] = 0
        dict_t[j] += 1

    if dict_s != dict_t:
        return False
    return True
