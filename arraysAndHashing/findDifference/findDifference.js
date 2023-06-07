// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2
// where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

// source: https://leetcode.com/problems/find-the-difference-of-two-arrays


var findDifference = function(nums1, nums2) {
    const res1 = []
    const res2 = []
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)

    set1.forEach(element => {
        if (!set2.has(element)) {
            res1.push(element)
        }
    })

    set2.forEach(element => {
        if (!set1.has(element)) {
            res2.push(element)
        }
    })

    return [res1, res2]
};
