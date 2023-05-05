// Given a string text, you want to use the characters of text to
// form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the
// maximum number of instances that can be formed.

// source:https://leetcode.com/problems/maximum-number-of-balloons/

var maxNumberOfBalloons = function(text) {
    let balloon = {
        "b": 1,
        "a": 1,
        "l": 2,
        "o": 2,
        "n": 1
    };

    let obj = {};
    for (let i = 0; i < text.length; i++) {
        obj[text[i]] = (obj[text[i]] || 0) + 1;
    }
    let freq = [];
    for (let letter in balloon) {
        if (!Math.floor(obj[letter]/balloon[letter])) return 0;
        freq.push(Math.floor(obj[letter]/balloon[letter]))
    }
    return Math.min(...freq)

};
