/**
 * 🧩 Kata: Move Zeroes
 * Given an array of numbers, move all the zeroes to the end of the array while maintaining 
 * the order of the non-zero elements. You must do it in place (modify the array directly).
 * @returns {void} Do not return anything, modify the input array in-place instead.
 */

function moveZeroes(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.push(...arr.splice(i, 1))
        }
    }
      console.log(arr)
}

moveZeroes([0, 1, 0, 3, 12]); // [1, 3, 12, 0, 0]
moveZeroes([1, 2, 3, 4]); // [1, 2, 3, 4] 
moveZeroes([0, -1, 2, 0, -3, 4]); // [-1, 2, -3, 4, 0, 0]
moveZeroes([0, 0, 1]); // [1, 0, 0]
module.exports = { moveZeroes };
