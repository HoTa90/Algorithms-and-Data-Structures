// Write a function called isSubsequence which takes in two strings and checks whether the characters in the
// first string form a subsequence of the characters in the second string.
// In other words, the function should check whether the characters in the
// first string appear somewhere in the second string, without their order changing.

function isSubsequence(str1, str2) {

    
    let i = 0;
    let matched = ''


    for (let j = 0; j < str2.length; j++){
        let str1Char = str1[i]
        let str2Char = str2[j];

        if (str1Char && str1Char === str2Char){
            matched += str1Char
            i++
        }
    }

    if (matched === str1){
        return true
    }

    return false

}

console.log(isSubsequence('hello', 'hello world')) // true)
console.log(isSubsequence('sing', 'sting')) // true)
console.log(isSubsequence('abc', 'abracadabra')) // true)
console.log(isSubsequence('abc', 'acb')) // false