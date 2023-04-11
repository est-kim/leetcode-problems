// Given two strings s and t, return true if s is a
// subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by
// deleting some (can be none) of the characters without disturbing the relative positions
// of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// source: https://leetcode.com/problems/is-subsequence/

const isSubsequence = (s, t) => {
    let indexS = 0;
    let indexT = 0;
    let count = 0;
    while (count < s.length && indexT < t.length) {
      if (s[indexS] === t[indexT]){
        indexS++;
        indexT++;
        count++;
      } else {
        indexT++;
      }
    }
    return count === s.length;
  };
