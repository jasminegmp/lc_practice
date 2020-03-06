/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    if (s.length === 0){
        return -1
    }
    let hashTable = {}
    for(let i = 0 ; i < s.length ; i++){
        console.log(hashTable, s[i])
        if (s[i] in hashTable){
            hashTable[s[i]] += 1;
        }
        else{
            hashTable[s[i]] = 1;
        }
    }
    console.log(hashTable)
    for(let i = 0 ; i < s.length ; i++){
        if (hashTable[s[i]] === 1){
            return i
        }
    }
    return -1;
};

const s = "cc";
let output = firstUniqChar(s);
console.log(output)