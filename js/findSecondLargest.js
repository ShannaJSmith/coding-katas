/**
 * 🧩 Kata: Find Second Largest
 * Given an array of numbers, return the second largest distinct number.
 * If there isn’t one (because all elements are equal or there’s only one), return null.
 */

// function findSecondLargest(arr) {
//     if (arr.length < 2) return null;
    
//     let largest = null;
//     let secondLargest = null;

//     for (num of arr) {
//         if(num === null || num > largest) {
//             secondLargest = largest;
//             largest = num;
//         } else if (num !== largest && (secondLargest === null || num > secondLargest)) {
//             secondLargest = num;
//         }
//     }

//         return secondLargest;
// }

// Alt Solution
function findSecondLargest(arr) {
  const { secondLargest } = arr.reduce(
    ({ largest, secondLargest }, num) =>
      largest === null || num > largest
        ? { largest: num, secondLargest: largest }
        : num !== largest && (secondLargest === null || num > secondLargest)
        ? { largest, secondLargest: num }
        : { largest, secondLargest },
    { largest: null, secondLargest: null }
  );

  return secondLargest;
}


findSecondLargest([2, 1, 5, 8]) // 5
findSecondLargest([6, 6, 6]) // null
findSecondLargest([2, 6, 9, 2, 4]) // 6

module.exports = { findSecondLargest };
