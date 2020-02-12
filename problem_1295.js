/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0;
    nums.map(i => {
        if (String(i).length%2 === 0){
            count += 1;
        }
    })
    return count;
};

output = findNumbers([]);
console.log(output)