const isPrime = function(num){
    let start = 2;
    if (num === 0 || num === 1){
        return false;
    }
    while(start < num){
        if (num % start === 0){
            return false;
        }
        start++;
    }
    return true;
}

console.log(isPrime(0))                         // false
console.log(isPrime(1))                          // false
console.log(isPrime(17))                         // true
console.log(isPrime(10000000000000))             // false