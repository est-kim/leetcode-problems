// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced
// to get t.

// All occurrences of a character must be replaced with another character while
// preserving the order of characters. No two characters may map to the same
// character, but a character may map to itself.

// source: https://leetcode.com/problems/isomorphic-strings/

// first iteration - debugging needed
var isIsomorphic = function(s, t) {
    // const objS = {}, objT = {};

    // function makeObject (string, object) {
    //     for (let i = 0; i < string.length; i++) {
    //         object[string[i]] = (object[string[i]] || 0) + 1;
    //     };
    // }

    // makeObject(s, objS);
    // makeObject(t, objT);

    // console.log(objS);
    // console.log(objT);

    // const objSvalues = Object.values(objS);
    // const objTvalues = Object.values(objT);

    // console.log(objSvalues);
    // console.log(objTvalues)

    // for (let i = 0; i < objSvalues.length; i++) {
    //     if (objSvalues[i] !== objTvalues[i]) return false;
    // }

    // return true;

    const obj1 = {};
    const obj2 = {};
    let p1 = 0;

    // {"b": "a"}


    for (let i = 0; i < s.length; i++) {
        if (obj1[s[i]] === undefined) {
            obj1[s[i]] = t[i]
        }
        if (obj2[t[i]] === undefined) {
            obj2[t[i]] = s[i]
        }
    }
    console.log(obj1)
    console.log(Object.keys(obj1).length)
    console.log(obj2)
    console.log(Object.keys(obj2).length)
    while (p1 < s.length) {
        if ((t[p1] !== obj1[s[p1]]) &&
        (s[p1] !== obj2[t[p1]]) &&
        (Object.keys(obj1).length !== Object.keys(obj2).length)
        ) return false;
        p1++;
    }

    return true;

};
