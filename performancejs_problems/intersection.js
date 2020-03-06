//intersection - Find the intersection of two arrays. 
// Can you do it in O(M+N) time (where M and N are the lengths of the two arrays)?

const intersection = function(arr1, arr2){
    let hashmap = {};
    let intersection_arr = [];
    for(let i = 0; i < arr1.length; i++){
        if (hashmap[arr1[i]]){
            hashmap[arr1[i]] += 1;
        }
        else{
            hashmap[arr1[i]] = 1;
        }
    }
    //console.log(hashmap)
    for(let j = 0; j < arr2.length; j++){
        if (hashmap[arr2[j]]){
            intersection_arr.push(arr2[j]);
        }
    }

    //console.log(intersection_arr)
    return intersection_arr;
}


console.log(intersection([1, 5, 4, 2,2], [8, 91, 4, 1, 3]))    // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12]))             // []