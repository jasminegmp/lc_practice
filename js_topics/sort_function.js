/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    let output = []
    for (let i in A){
        output.push(A[i] * A[i])
    }
    return output.sort((a,b) => (a-b))
    
};

output =sortedSquares([-4,-1,0,3,10])
console.log(output)