/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function(keyboard, word) {
    
    let hashTable = {};
    for(let i = 0; i < keyboard.length ; i++){
        hashTable[keyboard[i]] = i
    }
    //console.log(hashTable);

    let current = 0;
    let total = 0;
    let current_total;

    for (let j = 0 ; j < word.length; j++){
        current_total = Math.abs(hashTable[word[j]] - current);
        //console.log(word[j], hashTable[word[j]], total)
        current = hashTable[word[j]];
        total += current_total;
    }
 //   console.log(total)
    return total;
};

calculateTime("pqrstuvwxyzabcdefghijklmno", "leetcode")