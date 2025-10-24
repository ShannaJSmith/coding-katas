/**
 * 🧩 Kata: findingMissingNumber
 * You’re given an array containing all numbers from 1 to n, except one number is missing. Find and return that missing number.
 * Rules: The array is unsorted, there are no duplicates and if no number is missing, return 0.
 * Examples: findMissingNumber([1, 2, 4, 5, 6]) ➜ 3
 * findMissingNumber([2, 3, 1, 5]) ➜ 4
 * findMissingNumber([1, 2, 3, 4, 5]) ➜ 0  // means nothing is missing
 */

function findingMissingNumber(arr) {
  arr.sort((a, b) => a - b); // sort array in ascending order
  for (let i = 0; i < arr.length; i++) { // loop through the array to find break in sequence
    // sequence should be i + 1 since array is 0 indexed but the array starts from 1
    if (arr[i] !== i + 1) return i + 1; // return the missing number
  }
  return 0; // or if no gaps, so return 0
}

// Alternative function to find multiple missing numbers

// function findingMultipleMissingNumbers(arr) {
//   arr.sort((a, b) => a - b);
//   const missingNumbers = []; // define an array to hold missing numbers
//   for (let i = 0; i < arr.length; i++) {
//     while (arr[i] !== i + 1) {
//       missingNumbers.push(i + 1); // add the missing number to the list
//       i++; // increment i to check for next missing number
//     }
//   }
//   return missingNumbers.length > 0 ? missingNumbers : [0];
// }


// Example usage:
findingMissingNumber([1, 2, 4, 5, 6]); // 3
findingMissingNumber([2, 3, 1, 5]); // 4
findingMissingNumber([1, 2, 3, 4, 5]); // 0

// Comments: does not account for multiple missing numbers

module.exports = { findingMissingNumber };
