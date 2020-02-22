/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let ptr_0, ptr_1;
    for(let i = 0; i < nums.length ; i ++){
        
        for(let j = 0; j < nums.length - 1; j++){
            console.log(nums[i], nums[j])
        }
    }
};

permute([1,2,3])