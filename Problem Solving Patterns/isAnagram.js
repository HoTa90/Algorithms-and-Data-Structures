function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }

    let isAnagram = true

    const str1CharCounter = {}
    const str2CharCounter = {}

    for (let char of str1) {
        str1CharCounter[char] = (str1CharCounter[char] || 0) + 1;
    }

    for (let char of str2) {
        str2CharCounter[char] = (str2CharCounter[char] || 0) + 1;
    }

    for (let key in str1CharCounter) {
        if (!(key in str2CharCounter)) {
            isAnagram = false
            break;
        }
        if (str1CharCounter[key] !== str2CharCounter[key]) {
            isAnagram = false
            break;
        }
    }

    return isAnagram
}


console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat", "car")) // false) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true