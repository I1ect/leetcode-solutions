/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs[0].length > 0) {
        var combined = ""
        for (index = 0; index < strs.length; index++) {
            for (stringNum = 1; stringNum < strs[0].length; stringNum++) {
                if (strs[stringNum][index] != strs[0][index]) {
                    return combined
                }
            }
            combined += strs[0][index]
        }
        return combined
    }
    else {
        return ""
    }
};
console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))