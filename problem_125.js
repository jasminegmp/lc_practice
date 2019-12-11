/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
    let stack = [];
    
    let start_idx;
    let start_half_end;

    s = s.toLowerCase().replace(/[^a-z0-9]/g, ''); //replaces all non alphabet characters with ''
    let str_length = s.length;
    start_half_end = Math.floor(str_length / 2);

    // if odd string, remember to start after the halfway character
    if (str_length % 2){
        console.log("odd!", start_half_end)
        start_idx = start_half_end + 1;
    }
    else{console.log("even!", start_half_end)
    start_idx = start_half_end;
    }

    for(let i = 0; i < str_length; i++){
     if (i < start_half_end){
        stack.push(s[i]);
     }
     console.log( i, start_idx)
     if (i >= start_idx){
        if(stack.pop() !== s[i]){
            return false;
        }   
     }
     console.log(stack)
    }
    
    console.log(stack);
    console.log(s);

    if (stack.length > 0){
        console.log('here')
        return false;
    }
    return true
};

input = ".P";
let output = isPalindrome(input);
console.log(output);