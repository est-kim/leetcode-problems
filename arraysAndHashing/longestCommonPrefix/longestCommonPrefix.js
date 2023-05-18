// Write a function to find the longest common prefix string amongst an
// array of strings.

// If there is no common prefix, return an empty string "".

// source: https://leetcode.com/problems/longest-common-prefix

var longestCommonPrefix = function(strs) {
    if (strs.length === 1) return strs[0];
    let res = strs[0]; // "flower"

    for (let word of strs) {
        for (let i = res.length - 1; i >= 0; i--) {
            if (res[i] !== word[i]) {
                res = res.slice(0, i);
            }
        }
    }

    return res;
};
