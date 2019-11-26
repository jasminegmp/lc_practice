/**
 * @param {number} x
 * @return {number}
 */
function reverse_number(x) {

    var multiplier = 1;
    
    var rev_x = 0;
    
    if (Math.sign(x) === -1)
    {
        multiplier = -1;
        x = x * multiplier;
    }

    var exp = x.toString().length - 1
    var remainder = x;

    while(remainder > 0)
    {
        var last_dig = remainder % 10;
        rev_x = rev_x + last_dig * Math.pow(10,exp); 
        last_dig += rev_x;
        exp -= 1;
        remainder = Math.floor(remainder/ 10);
    }
    rev_x *= multiplier;

    // check for overflow on reversed number
    var overflow = (rev_x >= (Math.pow(2,31) - 1)) || (rev_x <= (Math.pow(2,31) * -1));
    if (overflow){
        return 0;
    }

    return rev_x
};

var num = 1231231231;
var output = reverse_number(num);
console.log(output);