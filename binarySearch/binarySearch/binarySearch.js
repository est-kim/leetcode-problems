// function accepts an array and a value
// loop the array and check if current array element
// is equal to value, return index at which the element
// is found. if never found, return -1

const binarySearch = (arr, val) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (val === arr[middle]) {
            return middle;
        } else if (val < arr[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return -1;
}
