/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var position = s.length - 1
    var total = 0
    var pastSingles = false
    var pastTens = false
    var pastHundreds = false
    while (position >= 0) {
        if (s[position] == 'I') {
            if (pastSingles) {
                total--
            }
            else { total++ }
        }
        if (s[position] == 'V') {
            pastSingles = true
            total += 5
        }
        if (s[position] == 'X') {
            pastSingles = true
            if (pastTens) {
                total -= 10
            }
            else { total += 10 }
        }
        if (s[position] == 'L') {
            pastSingles = true
            pastTens = true
            total += 50
        }
        if (s[position] == 'C') {
            pastSingles = true
            pastTens = true
            if (pastHundreds) {
                total -= 100
            }
            else { total += 100 }
        }
        if (s[position] == 'D') {
            pastSingles = true
            pastTens = true
            pastHundreds = true
            total += 500
        }
        if (s[position] == 'M') {
            pastSingles = true
            pastTens = true
            pastHundreds = true
            total += 1000
        }
        position--
    }
    return total
};

console.log(romanToInt("III"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))