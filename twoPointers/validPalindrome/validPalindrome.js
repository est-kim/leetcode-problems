// A phrase is a palindrome if, after converting all uppercase
// letters into lowercase letters and removing all non-alphanumeric
// characters, it reads the same forward and backward. Alphanumeric
// characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// source: https://leetcode.com/problems/valid-palindrome/


var isPalindrome = function(s) {
    let regexPattern = /[^A-Za-z0-9]/g;
    let newStr = s.replace(regexPattern, "").toLowerCase();
    let mid = newStr.length;
    let p1 = 0;
    let p2 = newStr.length - 1;

    while (mid > 0) {
        if (newStr[p1] !== newStr[p2]) {
            return false;
        } else {
            p1++;
            p2--;
            mid--;
        }
    }
    return true;

};
