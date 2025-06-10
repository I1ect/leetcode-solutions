/**
 * @param {string} s
 * @return {boolean}
 */

 // WIP
var isValid = function(s) {
    let arr = new Array()
    
    // Places them into Seperate Arrays
    for (index = 0; index < s.length; index++) {
        if (s[index] == '(' || s[index] == '[' || s[index] == '{') {
            arr.push(s[index])
        }
        if (s[index] == ')' || s[index] == ']' || s[index] == '}') {
            if (arr.length > 0) {
                let current = arr[arr.length - 1]
                switch (current) {
                    case '(':
                        if (s[index] == ')') { arr.pop() }
                        else {return false}
                        break;
                    case '[':
                        if (s[index] == ']') { arr.pop() }
                        else {return false}
                        break;
                    case '{':
                        if (s[index] == '}') { arr.pop() }
                        else {return false}
                        break;
                }
            }
            else {
                return false
            }
        }
    }

    if (arr.length > 0) {
        return false
    }
    return true
};
console.log(isValid("()()"))
console.log("----")
console.log(isValid("()[]{}"))
console.log("----")
console.log(isValid("(]"))
console.log("----")
console.log(isValid("([])"))