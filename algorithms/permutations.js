/**
 * @param {number} n
 * @return {number}
 */
var findPermutations = function(input_string) {
    history = [];
    let char_arr = input_string.split("");
    console.log(permutations)
    function findCombinations(current, count, history) {
       console.log(current, count, history);
       if (count === input_string.length){
        return history;
       }
       else{å

           return findCombinations(history, count++, history.concat()) || findCombinations()
       }
    }
    findCombinations(char_arr[0], count, history);
    return history

};

findPermutations('abc');