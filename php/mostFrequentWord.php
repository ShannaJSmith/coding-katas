<?php
/**
 * 🧩 Kata: Most Frequent Word
 * Given a string containing words separated by spaces, return the word that appears most frequently.
 * If multiple words tie, return the one that appears first in the string.
 * Matching is case-insensitive, but return the word in its original casing as it first appeared.
 * Ignore punctuation like . , ! ? attached to words.
 */

function mostFrequentWord(string $str): string {
    if (trim($str) === "") return "";

    // Remove punctuation around words
    $clean = preg_replace("/[^\w\s]/", "", $str);

    $words = explode(" ", $clean);
    $counts = [];
    $firstSeen = [];

    foreach ($words as $index => $w) {
        if ($w === "") continue;

        $lower = strtolower($w);

        // count it
        if (!isset($counts[$lower])) {
            $counts[$lower] = 0;
            $firstSeen[$lower] = $w; // original casing
        }
        $counts[$lower]++;
    }

    // find max
    $best = "";
    $bestCount = 0;
    $order = array_keys($counts); // preserves first occurrence order

    foreach ($order as $word) {
        if ($counts[$word] > $bestCount) {
            $best = $firstSeen[$word];
            $bestCount = $counts[$word];
        }
    }

    return $best;
}


// Test cases
echo mostFrequentWord("The cat and the hat");        // "The"
echo "\n";
echo mostFrequentWord("apple Apple APPLE banana");  // "apple"
echo "\n";
echo mostFrequentWord("Hi hi! HI??? hello");        // "Hi"
echo "\n";
echo mostFrequentWord("one two three");             // "one"
echo "\n";
