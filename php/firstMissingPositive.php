<?php
/**
 * 🧩 Kata: First Missing Positive Integer
 * Given an unsorted array of integers, 
 * return the smallest positive integer that is not present in the array.
 */

// function firstMissingPositive(array $nums): int {
//     $n = count($nums);

//     // Place each number in its "correct index" position
//     for ($i = 0; $i < $n; $i++) {
//         while (
//             $nums[$i] > 0 &&
//             $nums[$i] <= $n &&
//             $nums[$nums[$i] - 1] !== $nums[$i]
//         ) {
//             $temp = $nums[$nums[$i] - 1];
//             $nums[$nums[$i] - 1] = $nums[$i];
//             $nums[$i] = $temp;
//         }
//     }

//     for ($i = 0; $i < $n; $i++) {
//         if ($nums[$i] !== $i + 1) {
//             return $i + 1;
//         }
//     }

//     return $n + 1;
// }

function firstMissingPositive(array $nums): int {
    sort($nums);
    $expected = 1;

    foreach ($nums as $num) {
        if ($num === $expected) {
            $expected++;
        }
    }

    return $expected;
}


// Test cases
echo firstMissingPositive([3, 4, -1, 1]) . "\n";   // 2
echo firstMissingPositive([1, 2, 0]) . "\n";       // 3
echo firstMissingPositive([7, 8, 9]) . "\n";       // 1
echo firstMissingPositive([1]) . "\n";             // 2
echo firstMissingPositive([1, 2, 3]) . "\n";       // 4
echo firstMissingPositive([]) . "\n";              // 1

