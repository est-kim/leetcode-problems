// You are given an array people where people[i] is the weight of the ith person,
// and an infinite number of boats where each boat can carry a maximum weight of
// limit. Each boat carries at most two people at the same time, provided the sum
// of the weight of those people is at most limit.

// Return the minimum number of boats to carry every given person.

// source: https://leetcode.com/problems/boats-to-save-people/

var numRescueBoats = function(people, limit) {
    people.sort((a, b) => a - b);
    let boats = 0;
    let p1 = 0;
    let p2 = people.length - 1;

    while (p1 <= p2) {
        if (people[p1] + people[p2] <= limit) {
            p1++;
        }
        p2--;
        boats++;
    }

    return boats;
};
