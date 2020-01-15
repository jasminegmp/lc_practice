/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
function numJewelsInStones (J, S) {
    let j_array = [];
    let total = 0;
   for (let i = 0; i<J.length; i++){
    console.log(J[i]);
    j_array.push(J[i]);
   } 
   for(let j =0; j<S.length; j++){
        if (j_array.includes(S[j])){ // if S is in J
            console.log(S[j], total);
            total += 1;
        }
    }
    return total;
};

let J = "aA";
let S = "aAAbbbb";
let output = numJewelsInStones(J,S);
console.log(output)