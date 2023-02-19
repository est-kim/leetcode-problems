// Given an integer array nums, return true if any value
// appears at least twice in the array, and return false
// if every element is distinct.

var containsDuplicate = function(nums) {
    let obj = {}
    for (let i of nums) {
        if (obj[i] === undefined) {
            obj[i] = 1
        } else if (obj[i] === 1) {
            obj[i] += 1
            break;
        }
    }
    return false
};
