// Given an integer array flowerbed containing 0's and 1's,
// where 0 means empty and 1 means not empty, and an integer n,
// return true if n new flowers can be planted in the flowerbed
// without violating the no-adjacent-flowers rule and false
// otherwise.

// source: https://leetcode.com/problems/can-place-flowers/


var canPlaceFlowers = function(flowerbed, n) {
    let count = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0 &&
            (flowerbed[i-1] === undefined || flowerbed[i-1] === 0) &&
            (flowerbed[i+1] === undefined || flowerbed[i+1] === 0)) {
            flowerbed[i] = "flower";
            count++;
        }
    }
    return count >= n;
};
