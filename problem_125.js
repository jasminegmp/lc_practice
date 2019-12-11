/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
    let stack = [];
    let start_idx;
    let start_half_end;

    s = s.toLowerCase().replace(/[^a-z0-9]/g, ''); //replaces all non alphanumeric characters with ''
    
    // find where the halfway of string char is
    let str_length = s.length;
    start_half_end = Math.floor(str_length / 2);

    // if string is of odd length, remember to start after the halfway character
    if (str_length % 2){
        start_idx = start_half_end + 1;
    }
    else{
        start_idx = start_half_end;
    }

    // place items into stack up until halfway char
    // then at halfway char, start popping off the stack if the chars match
    for(let i = 0; i < str_length; i++){
     if (i < start_half_end){
        stack.push(s[i]);
     }
     if (i >= start_idx){
        if(stack.pop() !== s[i]){
            return false;
        }   
     }
    }

    // if items left in stack, not a palindrome
    if (stack.length > 0){
        return false;
    }
    return true
};

input = ".P";
let output = isPalindrome(input);
console.log(output);