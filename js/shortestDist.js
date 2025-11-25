/**
 * 🧩 Kata: shortest Distance to a character
 * Given a string s and a character c, return an array of the shortest distances 
 * from each index in s to the nearest c.
 */

function shortestDist(str, char) {
  const res = new Array(str.length).fill(Infinity);

  let prev = -Infinity;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) prev = i;
    res[i] = i - prev;
  }

  prev = Infinity;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === char) prev = i;
    res[i] = Math.min(res[i], prev - i);
  }

  return res;
}

shortestDist("loveleetcode", "e")   // [3,2,1,0,1,0,0,1,2,2,1,0]

module.exports = { shortestDist };
