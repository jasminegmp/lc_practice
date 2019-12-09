/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray_greedy (nums) {
    if (nums.length == 0){
        return null;
    }

    var new_sum;
    var prev_sum = 0;
    var max_sum = nums[0];
    var i = 0;
    var ptr_1 = i;
    var ptr_2 = i;

    while (i < nums.length){


        // when pointers point to the same pointer, doesn't matter
        if (ptr_1 === ptr_2)
        {
            var new_sum = nums[ptr_1];
        }
        // otherwise, new sum is two values added up + previous sum
        else{
            var new_sum = nums[ptr_1] + nums[ptr_2] + prev_sum;
        }
        console.log(ptr_1, ptr_2);
        console.log(nums[ptr_1], nums[ptr_2]);
        new_sum

        if (max_sum < new_sum)
        {
            ptr_1 += 1;
            prev_sum = new_sum;
        }
        else
        {
            ptr_2 += 1;
            prev_sum = new_sum;
            max_sum = new_sum;
        }

        i = Math.max(ptr_1, ptr_2);

        prev_sum
        new_sum
        max_sum


    }

    return max_sum;

};

var nums = [-2, -1, -3];
var output = maxSubArray_greedy(nums);
console.log(output);