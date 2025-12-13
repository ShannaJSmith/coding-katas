<?php
/**
 * 🧩 Kata: Longest Run of Same Character
 * Given a string, return the length of the longest consecutive run of the same character.
 * Case-sensitive. The run must be contiguous. Empty string returns 0
 */

function longestSameCharRun(string $str): int {
    $len = strlen($str);
    if ($len === 0) return 0;

    $maxRun = 1;
    $currentRun = 1;

    for ($i = 1; $i < $len; $i++) {
        if ($str[$i] === $str[$i - 1]) {
            $currentRun++;
        } else {
            $currentRun = 1;
        }

        if ($currentRun > $maxRun) {
            $maxRun = $currentRun;
        }
    }

    return $maxRun;
}


// Test cases
echo longestSameCharRun("aaabbc") . "\n";        // 3
echo longestSameCharRun("abbbcccccdd") . "\n";   // 5
echo longestSameCharRun("AaaBB") . "\n";         // 2
echo longestSameCharRun("abc") . "\n";           // 1
echo longestSameCharRun("") . "\n";              // 0
echo longestSameCharRun("zzzzzz") . "\n";        // 6

