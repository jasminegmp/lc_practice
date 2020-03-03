const factorial = function(num){
    if (num === 0 || num === 1){
        return 1;
    }
    return num*factorial(num-1)
}

console.log(factorial(0));                        // 1
console.log(factorial(1));                        // 1
console.log(factorial(6));                        // 720