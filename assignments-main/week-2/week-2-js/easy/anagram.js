/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    const lowerCaseS1 = str1.toLowerCase();
    const lowerCaseS2 = str2.toLowerCase();
    const a1 = lowerCaseS1.split("");
    a1.sort();

    const a2 = lowerCaseS2.split("");
    a2.sort();

    const s1 = a1.join("");
    const s2 = a2.join("");

    if(s1.toLowerCase() === s2.toLowerCase()) return true;
    else return false;
}

module.exports = isAnagram;
