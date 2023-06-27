// The goal of this Kata is to return the greatest distance of index positions between matching
// number values in an array or 0 if there are no matching values.

// Example: In an array with the values [0, 2, 1, 2, 4, 1] the greatest index distance is
// between the matching '1' values at index 2 and 5. Executing
// greatestDistance/greatest_distance/GreatestDistance with this array would return 3.
// (i.e. 5 - 2)

// source: https://www.codewars.com/kata/5442e4fc7fc447653a0000d5

var greatestDistance = function (data) {
  const obj = {};

  for (let i = 0; i < data.length; i++) {
    obj[data[i]] = (obj[data[i]] || 0) + 1;
  }
  let maxDist = 0;
  for (let key in obj) {
    if (obj[key] >= 2) {
      maxDist = Math.max(
        data.lastIndexOf(parseInt(key)) - data.indexOf(parseInt(key)),
        maxDist
      );
    }
  }
  return maxDist;
};

//
