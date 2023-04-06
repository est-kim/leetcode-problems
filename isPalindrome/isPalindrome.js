// Write a recursive function called isPalindrome
// which returns true if the string passed to it
// is a palindrome (reads the same forward and backward).
// Otherwise it returns false.

function isPalindrome(str) {
    if (str.length === 0) return true;
    let firstChar = str[0];
    let lastChar = str[str.length - 1];
    let remaining = str.slice(1, -1)
    if (firstChar !== lastChar) {
        return false;
    } else {
        return isPalindrome(remaining)
    }
}
