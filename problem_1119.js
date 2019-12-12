/**
 * @param {string} S
 * @return {string}
 */
function removeVowels (S) {
    let vowels = {};
    let output = '';
    vowels['a'] = true;
    vowels['e'] = true;
    vowels['i'] = true;
    vowels['o'] = true;
    vowels['u'] = true;

    for (let i = 0; i < S.length; i++){
        if (!(S[i] in vowels)){
            output += S[i];
        }
    }
    return output;


};

input = "aeiou";
let output = removeVowels(input);
console.log(output);