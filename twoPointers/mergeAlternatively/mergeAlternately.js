// You are given two strings word1 and word2. Merge the strings by adding letters in
// alternating order, starting with word1. If a string is longer than the other, append
// the additional letters onto the end of the merged string.

// Return the merged string.

// source: https://leetcode.com/problems/merge-strings-alternately/

var mergeAlternately = function(word1, word2) {
    let word = ""
    let p1 = 0;
    while (p1 < word1.length || p1 < word2.length) {
        if (word1[p1] !== undefined) {
            word += word1[p1]
        }
        if (word2[p1] !== undefined) {
            word += word2[p1]
        }
        p1++;
    }
    return word;
};

// time complexity: O(n)
// space complexity: O(n)
