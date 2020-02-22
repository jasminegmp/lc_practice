/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let odd = [];
    let even = [];
    for(let i in A){
        if (A[i] % 2 === 0){
            even.push(A[i]);
        }
        else{
            odd.push(A[i]);
        }
    }
    return even.concat(odd)
};

output = sortArrayByParity([3,1,2,4])