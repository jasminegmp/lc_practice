/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

  
    let current;
    let total = 0;
    let prev;


    // reverse string
    [...s].forEach(i => {
        current = romanNumerals[i];

        if (prev < current){
            total -= 2* prev;
        }
        total += current;
        prev = current;
        
    })
    return total
};
romanToInt('MCMXCIV')