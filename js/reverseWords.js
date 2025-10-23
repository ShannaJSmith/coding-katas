/**
 * 🧩 Kata: Reverse Words
 * Given a string containing words separated by spaces, return a new string with the words in reverse order, 
 * but the letters in each word stay the same.
 * Examples: "Hello World" -> "World Hello" 
 * "OpenAI is awesome" -> "awesome is OpenAI"
 * "  Leading and trailing spaces should be preserved." -> " preserved. be should spaces trailing and Leading  "
 * "SingleWord" -> "SingleWord"
 * "" -> ""
 */

function reverseWords(str) {
    if (typeof str !== 'string') return ''; // check if input is a string. return empty string if not
    return str.split(' ').reverse().join(' '); // split the string into words, reverse the array of words, and join them back into a string
}

reverseWords("Hello World"); // "World Hello"
reverseWords("OpenAI is awesome"); // "awesome is OpenAI"
reverseWords("  Leading and trailing spaces should be preserved."); // " preserved. be should spaces trailing and Leading  "
reverseWords("SingleWord"); // "SingleWord"
reverseWords(""); // ""

module.exports = { reverseWords };
