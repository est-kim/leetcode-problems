function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      const pivotIndex = partition(arr, left, right);
      quickSort(arr, left, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
  }

  function partition(arr, left, right) {
    const pivotIndex = randomPivot(left, right);
    const pivotValue = arr[pivotIndex];

    // Move the pivot to the right
    swap(arr, pivotIndex, right);

    let storeIndex = left;

    for (let i = left; i < right; i++) {
      if (arr[i] < pivotValue) {
        swap(arr, i, storeIndex);
        storeIndex++;
      }
    }

    // Move the pivot back to its final sorted position
    swap(arr, storeIndex, right);

    return storeIndex;
  }

  function randomPivot(left, right) {
    return Math.floor(Math.random() * (right - left + 1)) + left;
  }

  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

