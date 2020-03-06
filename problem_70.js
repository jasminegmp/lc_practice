/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    history = [];
    function findCombinations(n, count, history) {
        console.log(n, history);

        if (count > n){
            return 0;
        }

        if (count == n){
            return 1;
        }

        if(history[count] > 0){
            return history[count]
        }
        
        history[count] = findCombinations(n, count + 1 , history) + findCombinations(n, count + 2, history);
        return history[count]
    }
    findCombinations(n, 0, history);
    return history[0]

};

climbStairs(4);