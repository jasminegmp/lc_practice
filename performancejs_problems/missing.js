// Can you do it in O(N) time? Hint: There’s a clever formula you can use.
const missing = function (arr){
    if (arr.length === 0){
        return undefined;
    }

    let current_sum = arr.reduce((a,b)=>{return a+b});
    let expected_sum = 0;
    
    for(let i = 1 ; i <= arr.length + 1 ; i++){
        if (expected_sum === current_sum){
            return undefined;
        }
        expected_sum += i;
    }
    return (expected_sum - current_sum)

}


console.log(missing([]))                         // undefined
console.log(missing([1, 4, 3]))                  // 2
console.log(missing([2, 3, 4]))                  // 1
console.log(missing([5, 1, 4, 2]))               // 3
console.log(missing([1, 2, 3, 4]))               // undefined