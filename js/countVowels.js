/**
 * 🧩 Kata: Count Vowels
 * Write a function that returns the number of vowels in a given string.
 * Return 0 for no vowels or empty string.
 */

function countVowels(str) {
  const vowels = 'aeiou';
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

// Alternative solution using brute force (nested loops)

// function countVowelsBruteForce(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i].toLowerCase();
//     for (let j = 0; j < vowels.length; j++) {
//       if (char === vowels[j]) {
//         count++;
//         break; // break inner loop once a match is found
//       }
//     }
//   }

//   return count;
// } 

// Example usage:
console.log(countVowels("hello"));          // 2
console.log(countVowels("JAVASCRIPT"));     // 3
console.log(countVowels("WHY"));            // 0
console.log(countVowels("A quick brown fox")); // 5

module.exports = { countVowels }; 