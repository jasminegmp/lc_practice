/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {


    if (strs.length === 0){
        return ""
    }

    let shortest = 0;
    // find shortest string
    for(let i = 1; i < strs.length; i++){
        if (strs[shortest].length > strs[i].length){
            shortest = i;
        }
    }

    // use longest to check others against
    for(let j = 0; j < shortest ; j++){
        for (const str of strs) {
            console.log(str, strs[1][j])
        }
    }


};

longestCommonPrefix(["flower","flow","flight"])