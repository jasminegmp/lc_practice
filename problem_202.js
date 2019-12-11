/**
 * @param {number} n
 * @return {boolean}
 */
function isHappy(n) {
    
    let sum = 0;
    var not_found = true;
    let s_length = n.toString().length;
    let seen = [];

    while(not_found)
    {
        //loop through each digit
        console.log(n, seen, sum, "--------");
        for (let i = 0; i < s_length; i++){
            let digit = n % 10; 
           
            n = Math.floor(n / 10);
            sum = sum + Math.pow(digit, 2);
            console.log(digit, sum);
        }
        if (sum == 1){
            
            not_found = false;
            console.log("yup!");
            return true;
        }
        if (seen.includes(sum)){
            console.log("saw:", sum)
            not_found = false;
            return false;
        }
        seen.push(sum);
        n = sum;
        sum = 0;
        
        s_length = n.toString().length;
    }

};

input = 116;
let output = isHappy(input);
console.log(output);
