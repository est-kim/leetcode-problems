// Given two strings s and t, return true if t
// is an anagram of s, and false otherwise

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    let objS = {};
    let objT = {};

    for (let i = 0; i < s.length; i++) {
        objS[s[i]] = (objS[s[i]] || 0) + 1;
    };

    for (let j = 0; j< t.length; j++) {
        objT[t[j]] = (objT[t[j]] || 0) + 1;
    };

    for (let key in objS) {
        if (objS[key] !== objT[key]) return false;
    }

    return true;
};
