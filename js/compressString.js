/**
 * 🧩 Kata: Compress String
 * Write a function that takes a string and compresses it so that consecutive repeating characters 
 * are replaced with the character followed by the number of repetitions.
 * If the compressed string isn’t shorter than the original, return the original instead.
 * Treat uppercase and lowercase as different characters
 * For example, the string "aaabbbccdaa" would be compressed to "a3b3c2d1a2".
 */

function compressString(str) {
    let compressed = "";
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++; 
        } else {
            compressed += str[i] + count;   // Append character and its count
            count = 1;                      // Reset count for new character
        }
    }

    // Return the original string if compressed isn't shorter
    if (compressed.length < str.length) {
        return compressed;
    } else {
        return str;         
    }

}
 
compressString("aaabbbccdaa") // "a3b3c2d1a2"
compressString("abcd") // "abcd"
compressString("aabbcc") // "aabbcc"
compressString("AaaBBb") // "A1a2B2b1" but returns "AaaBBb" because it's shorter

module.exports = { compressString };
