

var minimumDifference = function(nums, k) {
    const n = nums.length;

    nums.sort((a, b) => a - b);

    let minDiff = Infinity;

    for (let i = 0; i <= n - k; i++) {
        const diff = nums[i + k - 1] - nums[i];

        if (diff < minDiff) {
            minDiff = diff;
        }
    }

    return minDiff;
};
