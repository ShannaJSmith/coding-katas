/**
 * 🧩 Kata: Find Second Largest
 * Given an array of numbers, return the second largest distinct number.
 * If there isn’t one (because all elements are equal or there’s only one), return null.
 */

function findSecondLargest(arr) {
    if (arr.length < 2) return null;
    
    let largest = null;
    let secondLargest = null;

    for (num of arr) {
        if(num === null || num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num !== largest && (secondLargest === null || num > secondLargest)) {
            secondLargest = num;
        }
    }
    console.log(secondLargest)
        return secondLargest;
}
// Alt Solution
// function findSecondLargest(arr) {
//   if (arr.length < 2) return null;

//   const { largest, second } = arr.reduce(
//     (acc, num) => {
//       const { largest, second } = acc;

//       if (largest === null || num > largest) {
//         return { largest: num, second: largest };
//       } else if (
//         num !== largest &&
//         (second === null || num > second)
//       ) {
//         return { largest, second: num };
//       }

//       return acc;
//     },
//     { largest: null, second: null }
//   );

//   return second;
// }


findSecondLargest([2, 1, 5, 8]) // 5
findSecondLargest([6, 6, 6]) // null
findSecondLargest([2, 6, 9, 2, 4]) // 6

module.exports = { findSecondLargest };
