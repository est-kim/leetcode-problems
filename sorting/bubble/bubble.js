const bubbleSort = (arr) => {
	const swap = (arr, index1, index2) => {
		[arr[index1], arr[index2]] = [arr[index2], arr[index1]];
	}
	let noSwaps;
	for (let i = arr.length; i > 0; i--) {
		noSwaps = true;
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				noSwaps = false;
				swap(arr, j, j + 1);
			}
		}
		if(noSwaps) break;
	}
	return arr;
}
