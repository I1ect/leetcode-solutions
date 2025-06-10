/**
 * @param {string} s
 * @return {number}
 */

// WIP

var maxDifference = function(s) {
    const freq = new Map();
    stringArray = new Array(...s)
    stringArray.forEach(element => {
        count = freq.get(element) || 0
        freq.set(element, count + 1)
    });
    let even = new Array()
    let odd = new Array()

    for (const [letter, frequency] of freq) {
        if (frequency % 2 == 0) {
            even.push(frequency)
        }
        else if (frequency % 2 == 1) {
            odd.push(frequency)
        }
    }

    // Find the maximum difference
    let maxDif = 0
    let oddNumber = 0
    let evenNumber = 0
    for (let oddNum in odd) {
        for (let evenNum in even) {
            if (Math.abs(oddNum - evenNum) > maxDif) {
                maxDif = (Math.abs(oddNum - evenNum))
                oddNumber = oddNum
                evenNumber = evenNumber
            }
        }
    }
    return oddNumber - evenNumber
};

console.log(maxDifference("aaaaabbc"))
console.log(maxDifference("ililm"))
console.log(maxDifference("abcabcab"))