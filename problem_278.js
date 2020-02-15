/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // build a left and right array
    let left = []
    let right = []
    let product = []

    // get products of all left
    left[0] = 1;
    for(let i = 1 ; i < nums.length; i++){
        //console.log(left[i-1], nums[i-1]) 
        left[i] = left[i-1] * nums[i-1]
        
    }
    //console.log(left)

    right[nums.length -1] = 1;
    // get products of all right
    for(let i = nums.length - 2; i >= 0; i-- ){
        //console.log(right[i+1], nums[i+1]) 
        right[i] = right[i+1] * nums[i+1]
    }
   // console.log(right)

    // find product of left and right arrays
    for(let i = 0; i < nums.length ; i++){
        product.push(left[i]*right[i])
    }
    //console.log(product)
    return product
};

var productExceptSelfConstantSizeComplexity = function(nums) {
    // build a left and right array
    let answer = []

    // get products of all left
    answer[0] = 1;
    for(let i = 1 ; i < nums.length; i++){
        //console.log(left[i-1], nums[i-1]) 
        answer[i] = answer[i-1] * nums[i-1]
        
    }
    //console.log(answer)

    let R = 1;
    // get products of all right
    for(let i = nums.length - 1; i >= 0; i-- ){
        //console.log(answer[i+1], R) 
        answer[i] = answer[i] * R
        R *= nums[i]

    }
   //console.log(answer)

    //console.log(product)
    return answer
};

productExceptSelfConstantSizeComplexity([1,2,3,4])