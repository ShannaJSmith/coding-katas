<?php
/**
 * 🧩 Kata: Find the First Non-Repeating Character
 * Given a string, return the first character that does not repeat anywhere else in the string.
 * If all characters repeat, return an empty string "". Case-sensitive.
 */

function firstNonRepeatingChar(string $str): string {
    $lower = strtolower($str);
    $freq = [];

    // count case-insensitive
    for ($i = 0; $i < strlen($lower); $i++) {
        $char = $lower[$i];
        $freq[$char] = ($freq[$char] ?? 0) + 1;
    }

    for ($i = 0; $i < strlen($str); $i++) {
        if ($freq[$lower[$i]] === 1) {
            return $str[$i];
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

