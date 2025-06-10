/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let position = 0
    while (position < nums.length) {
        if (nums[position] == nums[position + 1]) {
            nums.splice(position + 1, 1)
        }
        else { position++ }
    }
};
