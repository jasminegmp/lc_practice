const fib = function(num){
    if (num === 0){
        return 0;
    }
    if (num === 1){
        return 1;
    }
    return fib(num-1) + fib(num-2)
}

console.log(fib(0))                              // 0
console.log(fib(1))                              // 1
console.log(fib(10))                             // 55
console.log(fib(20))                             // 6765