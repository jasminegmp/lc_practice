const isPalindrome = function (input) {
    if (input.length === 0 || input.length === 1){
        return true;
    }

    if (input.includes(' ')){
        let temp = input.split(' ');
        input = temp.join('');
    }
    input = input.toLowerCase();

    let start = 0;
    let end = input.length - 1;
    while(start !== end){
        if (input[start] !== input[end])
        {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

console.log(isPalindrome(''))                                // true
console.log(isPalindrome('abcdcba'))                         // true
console.log(isPalindrome('abcd'))                            // false
console.log(isPalindrome('A man a plan a canal Panama'))     // true