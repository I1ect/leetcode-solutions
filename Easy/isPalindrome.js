/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let stringified = String(x)
    let index = 0
    while (index < (stringified.length - 1 - index)) {
        if (stringified[index] != stringified[stringified.length - 1 - index]) {
            return false
        }
        index++
    }
    return true
};

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))