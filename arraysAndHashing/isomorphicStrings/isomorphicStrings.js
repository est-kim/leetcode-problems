// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced
// to get t.

// All occurrences of a character must be replaced with another character while
// preserving the order of characters. No two characters may map to the same
// character, but a character may map to itself.

// source: https://leetcode.com/problems/isomorphic-strings/

// first iteration
var isIsomorphic = function(s, t) {
    const obj1 = {};
    const obj2 = {};
    let p1 = 0;

    for (let i = 0; i < s.length; i++) {
        if (obj1[s[i]] === undefined) {
            obj1[s[i]] = t[i]
        }
        if (obj2[t[i]] === undefined) {
            obj2[t[i]] = s[i]
        }
    }

    while (p1 < s.length) {
        if ((t[p1] !== obj1[s[p1]]) ||
        (s[p1] !== obj2[t[p1]]) ||
        (Object.keys(obj1).length !== Object.keys(obj2).length)
        ) return false;
        p1++;
    }

    return true;
};
// space: O(n), time: O(n)

// second iteration
var isIsomorphic2 = function(s, t) {
    const mapS = new Map();
    const mapT = new Map();

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if ((!mapS.has(charS)) && (!mapT.has(charT))) {
            mapS.set(charS, charT);
            mapT.set(charT, charS);
        } else if (mapS.get(charS) !== charT || mapT.get(charS) !== charS) {
            return false;
        }
    }

    return true;
};

// space: O(n), time: O(k)
