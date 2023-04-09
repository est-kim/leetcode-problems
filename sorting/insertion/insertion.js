const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
      let currentVal = arr[i];
      let j = i - 1; // declare j outside the loop
      while (j >= 0 && arr[j] > currentVal) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = currentVal;
    }
    console.log(arr)
    return arr;
  }
