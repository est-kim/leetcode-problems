// Write a recursive function called capitalizeFirst.
// Given an array of strings, capitalize the first letter
// of each string in the array.

function capitalizeFirst (arr, newArr = []) {
    if (arr.length === 0) return newArr;
    let popped = arr.pop();
    newArr.unshift(popped[0].toUpperCase().concat(popped.substring(1)));
    return capitalizeFirst(arr, newArr);
}
