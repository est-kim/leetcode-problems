// You are given an array prices where prices[i]
// is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a
// single day to buy one stock and choosing a different
// day in the future to sell that stock.

// Return the maximum profit you can achieve from
// this transaction. If you cannot achieve any profit,
// return 0.

var maxProfit = function(prices) {
    let profit = 0;
    let start = 0;
    for (let next = 1; next < prices.length; next++) {
        let diff = prices[next] - prices[start];
        if (diff > profit) {
            profit = diff;
        } else if (diff < 0) {
            start = next;
        }
    }
    return profit;
};
