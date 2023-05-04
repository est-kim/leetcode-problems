// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between
// a letter in pattern and a non-empty word in s.

// source: https://leetcode.com/problems/word-pattern/


var wordPattern = function(pattern, s) {
    let string = s.split(" ");
    let set = new Set(pattern);
    let obj1 = {};

    if (pattern.length !== string.length) return false;

    for (let i = 0; i < pattern.length; i++) {
        if (obj1[pattern[i]] === undefined) {
            obj1[pattern[i]] = string[i];
        } else if (obj1[pattern[i]] && (obj1[pattern[i]] !== string[i])) {
            return false;
        }
    }

    let set2 = new Set(Object.values(obj1));
    return set.size === set2.size;
};
