// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

function capitalizedWords(arr) {

    if (arr.length < 1) {
        return []
    }

    let firstWord = arr[0].toUpperCase();

    return [firstWord, ...capitalizedWords(arr.slice(1))]

}



let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']