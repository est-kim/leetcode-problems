// Given two strings s and t, return true if t
// is an anagram of s, and false otherwise

var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let obj1 = {};
    let obj2 = {};

    for (let i of s) {
        if (obj1[i] === undefined) {
            obj1[i] = 1;
        } else {
            obj1[i] += 1;
        }
    }

    for (let j of t) {
        if (obj2[j] === undefined) {
            obj2[j] = 1;
        } else {
            obj2[j] += 1;
        }
    }

    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
};
