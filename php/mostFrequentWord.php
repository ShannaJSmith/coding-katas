<?php
/**
 * 🧩 Kata: Most Frequent Word
 * Given a string containing words separated by spaces, return the word that appears most frequently.
 * If multiple words tie, return the one that appears first in the string.
 * Matching is case-insensitive, but return the word in its original casing as it first appeared.
 * Ignore punctuation like . , ! ? attached to words.
 */

// function mostFrequentWord(string $str): string {
//     if (trim($str) === "") return "";

//     // Remove punctuation around words
//     $clean = preg_replace("/[^\w\s]/", "", $str);

//     $words = explode(" ", $clean);
//     $counts = [];
//     $firstSeen = [];

//     foreach ($words as $index => $w) {
//         if ($w === "") continue;

//         $lower = strtolower($w);

//         // count it
//         if (!isset($counts[$lower])) {
//             $counts[$lower] = 0;
//             $firstSeen[$lower] = $w; // original casing
//         }
//         $counts[$lower]++;
//     }

//     // find max
//     $best = "";
//     $bestCount = 0;
//     $order = array_keys($counts); // preserves first occurrence order

//     foreach ($order as $word) {
//         if ($counts[$word] > $bestCount) {
//             $best = $firstSeen[$word];
//             $bestCount = $counts[$word];
//         }
//     }

//     return $best;
// }

// Alt
function mostFrequentWord(string $text): string {
    if (trim($text) === "") return "";

    // Normalize to lowercase for counting
    $words = preg_split("/\s+/", strtolower($text));

    $freq = [];              // word => count
    $firstIndex = [];        // word => first time seen
    $maxFrequency = 0;
    $mostFrequentWord = "";
    $tieBreakerIndex = PHP_INT_MAX;

    foreach ($words as $i => $word) {
        if (!isset($freq[$word])) {
            $freq[$word] = 0;
            $firstIndex[$word] = $i;
        }

        $freq[$word]++;

        if (
            $freq[$word] > $maxFrequency ||
            ($freq[$word] === $maxFrequency && $firstIndex[$word] < $tieBreakerIndex)
        ) {
            $maxFrequency = $freq[$word];
            $mostFrequentWord = $word;
            $tieBreakerIndex = $firstIndex[$word];
        }
    }

    return $mostFrequentWord;
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
echo mostFrequentWord("apple banana apple orange banana apple"); // apple
echo "\n";
echo mostFrequentWord("cat dog dog cat cat dog");                // cat (tie so go with first)
echo "\n";
echo mostFrequentWord("One one ONE two Two");                   // one
echo "\n";
echo mostFrequentWord("x y z");                                  // x (all equal, go with first)
echo "\n";
echo mostFrequentWord("");                                       // ""
echo "\n";

