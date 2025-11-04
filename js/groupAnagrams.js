/**
 * 🧩 Kata: Group Anagrams
 * Given an array of strings, group the strings that are anagrams of each other.
 * Rules: Strings with the same characters (sorted alphabetically) go in the same group
 * Return an array of grouped arrays. Strings can repeat.
 */

function groupAnagrams(words) {
  const map = new Map();

  for (let word of words) {
    const key = word.split("").sort().join("");

    if (!map.has(key)) map.set(key, []); // Initialize array if key not present
    map.get(key).push(word); 
  }

  return Array.from(map.values());
}

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]); // [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]

module.exports = { groupAnagrams };
