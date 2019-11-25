function two_sum(nums, target) {
    const m = new Map();
    var count = 1;
    for (var i =0; i < nums.length; i++){
        let complement = target - nums[i];
        if (m.get(complement) >= 1 )
        {
            const found = [nums.indexOf(complement), i];
            return found;
        }
        if (m.get(nums[i]) >= 1) 
        {
            count = m.get(nums[i]) + 1;
        }
        else
        {
           count = 1;
        }
        m.set(nums[i], count);
    }
    return false;
};

nums = [2,3,11,15];

target = 26;
var output = two_sum(nums, target);
console.log(output);