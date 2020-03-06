/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    for(let i = 0; i < nums.length ; i++){
        if (nums[i] === 0){
            // move 0 until the number after it is not a number
            let j = i + 1;
            while(nums[j] != 0){
                j++;
            }
        }
        
    }
    console.log(nums)
    
};

moveZeroes([0,1,0,3,12]);