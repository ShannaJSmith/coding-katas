/**
 * 🧩 Kata: Most Frequent Elements
* Given an array of numbers, return the k most frequent elements.
* If multiple numbers have the same frequency, order doesn’t matter.
 */

function mostFrequentElements(arr, k) {
    const kMostFrequeny = [];       // Array to store the k most frequent elements
    const numCount = {};  // Object to store number counts

    for (const num of arr) {                // Count occurrences of each number
        if (numCount[num] === undefined) {
            numCount[num] = 1;
        } else {
            numCount[num]++;
        }
    }

    const sorted = Object.keys(numCount).sort((a, b) => numCount[b] - numCount[a]); // Sort numbers by frequency
    
    for (let i = 0; i < k; i++) {
        kMostFrequeny.push(Number(sorted[i]));
    }
    // Alternative concise way:
    // kMostFrequeny.push(...sorted.slice(0, k).map(Number));

    return kMostFrequeny;   
}


mostFrequentElements([1,1,1,2,2,3], 2) // [1,2]
mostFrequentElements([1,2,3,4,5,6], 3) // [1,2,3] (or any 3 numbers)        
mostFrequentElements([4,4,4,6,6,2,2,2,3], 2) // [4,2]

module.exports = { mostFrequentElements };
