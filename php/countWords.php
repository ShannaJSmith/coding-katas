<?php
/**
 * 🧩 Kata: Longest String without Repeating Characters
 * Write a function countWords(string $s) that returns the number of actual words in a sentence.
 * A “word” is any sequence of letters or digits. Ignore punctuation.
 * Multiple spaces should not affect the count.
 */

// function countWords(string $s): int {
//     // Extract sequences of letters or digits
//     preg_match_all('/[A-Za-z0-9]+/', $s, $matches);
//     return count($matches[0]);
// }

function countWords(string $s): int {
    $parts = array_filter(explode(" ", trim($s)), fn($w) => $w !== "");
    return count($parts);
}

// Test cases
echo countWords("hello") . "\n";                 // 1
echo countWords("one two three") . "\n";         // 3
echo countWords("  hello   world  ") . "\n";     // 2
echo countWords("") . "\n";                      // 0
echo countWords("     ") . "\n";                 // 0
echo countWords("hey, you okay?") . "\n";        // 3



