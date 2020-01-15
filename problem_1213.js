/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */

 /*
function arraysIntersection (arr1, arr2, arr3) {
    var output = [];
    var new_set = new Set(arr1.concat(arr2, arr3));
    new_set = Array.from(new_set);
    console.log(new_set);
    for (let i=0; i< new_set.length; i++){
        console.log(new_set[i]);
        if (arr1.includes(new_set[i]) && arr2.includes(new_set[i]) && arr3.includes(new_set[i])){
            console.log(new_set[i])
            output.push(new_set[i]);
        }
    }
    return output;
    
};*/

function arraysIntersection (arr1, arr2, arr3){
    let output = [];
    let i = 0;
    let j = 0;
    let k = 0;

    while(i<arr1.length && j<arr2.length && k<arr3.length)
    {
        console.log(i,j,k)

        // all three items the same
        if (arr1[i] === arr2[j] && arr2[j] === arr3[k]){
            output.push(arr1[i]);
            i++;
            j++;
            k++;
        }
        // arr1 < arr2
        else if (arr1[i] < arr2[j]){
            i++;
        }

        // arr2 < arr3
        else if (arr2[j] < arr3[k]){
            j++;
        }

        // arr3 < arr2
        else {
            k++;
        }
    }
    return output;
} 

var arr1 = [1,2,3,5];
var arr2 = [1,2,5,7,9];
var arr3 = [1,3,4,5,8];
var output = arraysIntersection(arr1, arr2, arr3);
console.log(output);