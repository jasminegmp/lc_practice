const reverseInPlace = function(arr){
    let halfway = Math.floor(arr.length / 2);
    //console.log(halfway)

    //swap until halfway
    for (let i = 0 ; i < halfway; i++){
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i] ;
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

let output = reverseInPlace(['a','b','c','d']);
console.log(output);