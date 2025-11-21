/**
 * 🧩 Kata: Insert Interval
 * You’re given a list of non-overlapping intervals sorted by start time, and a new interval to insert. 
 * Merge any overlaps and return the updated list.
 *[ [1,3], [6,9] ] Each inner array means: [1,3] → from 1 to 3, [6,9] → from 6 to 9
 * Result: [[1,5], [6,9]]
 */

function insertInterval(ints, newInt) {
    let [newStart, newEnd] = newInt;
    const result = [];

  for (let i = 0; i < ints.length; i++) {
    const [start, end] = ints[i];

    // interval ends BEFORE new interval starts (no overlap)
    if (end < newStart) {
      result.push(ints[i]);
    }
    // interval starts AFTER new interval ends
    else if (start > newEnd) {
      result.push([newStart, newEnd]);
      // newInt becomes current one
      return result.concat(ints.slice(i));
    }
    // overlap (merge them)
    else {
      newStart = Math.min(newStart, start);
      newEnd = Math.max(newEnd, end);
    }
  }

  result.push([newStart, newEnd]);

  return result;
}

insertInterval([[1, 3], [6, 9]], [2, 5])                            // [[1, 5], [6, 9]]
insertInterval([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 9]) // [[1,2], [3,10], [12,16]]
insertInterval([], [5, 7])                                          // [[5, 7]]
insertInterval([[1, 5]], [2, 3])                                    // [[1,5]]


module.exports = { insertInterval };
