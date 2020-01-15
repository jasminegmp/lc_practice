/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min_price = prices[0];
    let max_profit = 0;
    for(let i = 1; i < prices.length ; i++){
        if (min_price > prices[i]){
            min_price = prices[i]
        }
        else if (prices[i] - min_price > max_profit){
            max_profit = prices[i] - min_price;
        }
    }
    console.log(max_profit)
    return max_profit
};


maxProfit([7,4,3,2,1])