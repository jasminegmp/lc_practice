/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max_so_far = nums[0];
    let max_ends_here = nums[0];
    //console.log(max_so_far, max_ends_here)

    for (let i = 1; i < nums.length; i++){
        max_ends_here = Math.max(max_ends_here + nums[i], nums[i])

        max_so_far = Math.max(max_so_far, max_ends_here)
        //console.log(max_so_far, max_ends_here)
    }
    //console.log(max_so_far)
    return max_so_far
};

maxSubArray([-2,1,-3,4,-1,2,1,-5,4])