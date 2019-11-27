/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {

    if (x === 0){
        return true;
    }
    
    if (Math.sign(x) === -1)
    {
        return false;
    }
    else if (x % 10 === 0)
    {
        return false;
    }

    var exp = x.toString().length - 1;
    var remainder = x;
    var reversed_x = 0;
    var last_dig;

    while(remainder > 0)
    {
        last_dig = remainder % 10;
        remainder = Math.floor(remainder/10);
        reversed_x += last_dig * Math.pow(10,exp);
        exp -= 1;
    }
    
    if (reversed_x === x)
    {
        return true;
    }
    else
    {
        return false;
    }


};

var num = 0;
output = isPalindrome(num);
console.log(output);
