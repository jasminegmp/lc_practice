const isSorted = function(arr){
    if (arr.length === 0){
        return true;
    }
    let prev = arr[0];
    for(let i = 1; i < arr.length; i++){
        if (prev > arr[i]){
            return false;
        }
        prev = arr[i]
    }
    return true;
}

console.log(isSorted([]))                        // true
console.log(isSorted([-Infinity, -5, 0, 3, 9]))  // true
console.log(isSorted([3, 9, -3, 10]))            // false