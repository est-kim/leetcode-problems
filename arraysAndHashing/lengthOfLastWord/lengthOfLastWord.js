// Given a string s consisting of words and spaces,
// return the length of the last word in the string.

// A word is a maximal substring consisting of non-space
// characters only.

const lengthOfLastWord = (s) => {
    const newS = s.trim().split(" ");
    return (newS[newS.length - 1]).length
};
