/**
 * 🧩 Kata: First Non Repeat
 * Given a string, return the first character that does not repeat.
 * Rules: If all characters repeat, return an empty string "". 
 * Case-sensitive (treat A different from a)
 */

function firstNonRepeat(str) {
    const charCount = {};   // Object to store character counts

    for (const char of str) {       
        if (charCount[char] === undefined) { 
            charCount[char] = 1;        // Count occurrences of each character
            } else {
            charCount[char]++;
            }
    }
    for (const char of str) {       // Find the first non-repeating character
        if (charCount[char] === 1) {
            return char;
        }
    }
    return "";
}

firstNonRepeat("swiss") // "w"
firstNonRepeat("repeater") // "p"
firstNonRepeat("aabbcc") // ""
module.exports = { firstNonRepeat };
