// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.


function findLongestSubstring(str) {

    let start = 0;
    let longestSubstring = 0;
    const seen = {};

    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];

        if (seen[currentChar]) {
            start = Math.max(start, seen[currentChar])
        }

        longestSubstring = Math.max(longestSubstring, i - start + 1)
        seen[currentChar] = i + 1
    }

    return longestSubstring
}


console.log(findLongestSubstring(''))// 0)
console.log(findLongestSubstring('rithmschool'))// 7)
console.log(findLongestSubstring('thisisawesome'))// 6)
console.log(findLongestSubstring('thecatinthehat'))// 7)
console.log(findLongestSubstring('bbbbbb'))// 1)
console.log(findLongestSubstring('longestsubstring'))// 8)
console.log(findLongestSubstring('thisishowwedoit'))// 6)