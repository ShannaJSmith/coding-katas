<?php
/**
 * 🧩 Kata: Find the First Non-Repeating Character
 * Given a string, return the first character that does not repeat anywhere else in the string.
 * If all characters repeat, return an empty string "". Case-sensitive.
 */

function firstNonRepeatingChar(string $str): string {
    $freq = [];

    // Count occurrences
    $len = strlen($str);
    for ($i = 0; $i < $len; $i++) {
        $char = $str[$i];
        $freq[$char] = ($freq[$char] ?? 0) + 1;
    }

    // Find the first char with count === 1
    for ($i = 0; $i < $len; $i++) {
        $char = $str[$i];
        if ($freq[$char] === 1) {
            return $char;
        }
    }

    return "";
}

// Test cases
echo firstNonRepeatingChar("aabbcdd") . "\n";   // c
echo firstNonRepeatingChar("aabbcc") . "\n";    // "" (empty)
echo firstNonRepeatingChar("stress") . "\n";    // t
echo firstNonRepeatingChar("Swiss") . "\n";     // w (case-sensitive)
echo firstNonRepeatingChar("") . "\n";          // ""
echo firstNonRepeatingChar("x") . "\n";         // x

