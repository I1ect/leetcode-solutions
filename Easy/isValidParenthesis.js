/**
 * @param {string} s
 * @return {boolean}
 */

 // WIP
var isValid = function(s) {
    let arr = new Array()
    if (s[0] == ')' || s[0] == '}' || s[0] == ']') {
        return false
    }
    for (index = 0; index < s.length; index++) {
        if (s[index] == '(' || s[index] == '[' || s[index] == '{') {
            arr.push(s[index])
        }
        else {
            if (arr.length > 0 ) {
                if (s[index] == ')') {
                    if (arr[arr.length-1] == '(') {
                        arr.pop()
                    }
                    else return false
                }
                if (s[index] == ']') {
                    if (arr[arr.length-1] == '[') {
                        arr.pop()
                    }
                    else return false
                }
                if (s[index] == '}') {
                    if (arr[arr.length-1] == '{') {
                        arr.pop()
                    }
                    else return false
                }
            }
        }
    }
    if (arr.length == 0) {
        return true
    }
    return false
};
console.log(isValid("()()"))
console.log("----")
console.log(isValid("()[]{}"))
console.log("----")
console.log(isValid("(]"))
console.log("----")
console.log(isValid("([])"))