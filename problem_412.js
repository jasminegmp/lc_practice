/**
 * @param {number} n
 * @return {string[]}
 */
function fizzBuzz (n) {
    let output = [];
    let temp_str = '';

    for(let i = 1; i <= n; i++){
        if (i % 3 === 0){
            temp_str += 'Fizz';
        }
        if (i % 5 === 0) {
            temp_str += 'Buzz';
        }
        if (temp_str === '')
        {
            temp_str = i.toString();
        }

        output.push(temp_str);
        temp_str = '';
    }
    return output;
};

n = 15;
let output = fizzBuzz(n);
console.log(output);