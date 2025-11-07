/**
 * 🧩 Kata: Remove Duplicates from Sorted Array
* Given a sorted array of numbers, remove the duplicates in-place so that each number appears only once, 
* and return the count of unique elements. You don’t need to return a new array — just modify the existing 
* one up to the point of uniqueness.
*/

function removeDuplicates(arr) {
    let countOfUniqueEl = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) { // If current element is different from the next
            arr[countOfUniqueEl] = arr[i]; // Place it at the position of countOfUniqueEl
            countOfUniqueEl++;
        }
    }

    return countOfUniqueEl;     
}

// Not "in-place" version but works
// function removeDuplicates(arr) {
//     let countOfUniqueEl = 0;
//     let uniqueMap = {};

//     for (let num of arr) {
//         if (uniqueMap[num] === undefined) {
//             uniqueMap[num] = 1;
//             countOfUniqueEl++;
//         }
//     }

//     return countOfUniqueEl;
// }


removeDuplicates([1,1,2,2,3]) // 3, array modified to [1,2,3,...]
removeDuplicates([0,0,1,1,1,2,2,3,3,4]) // 5, array modified to [0,1,2,3,4,...]         
removeDuplicates([1,2,3,4,5]) // 5, array remains [1,2,3,4,5]

module.exports = { removeDuplicates };
