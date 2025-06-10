/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    index = 0
    while (index < nums.length) {
        if (nums[index] == val) {
            nums.splice(index, 1)
        }
        else {
            index++
        }
    }
    return nums.length
};

console.log(removeElement([3,2,2,3], 3))
console.log(removeElement([0,1,2,2,3,0,4,2], 2))