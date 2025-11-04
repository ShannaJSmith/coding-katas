/**
 * 🧩 Kata: Count Odds (easy)
 * Given an array of integers, return how many of them are odd numbers.
 * Return a number. Assume input is integers only.
 * Empty array should returns 0.
 */

function countOdds(arr) {
    let countIsOdd = 0;

    for (let num of arr) {
        if (num % 2 !== 0) { // Check if number is odd
            countIsOdd += 1;
        }
    }
    return countIsOdd;
}

countOdds([1,2,3,4,5]) // 3
countOdds([2,4,6])     // 0
countOdds([])          // 0

module.exports = { countOdds };
