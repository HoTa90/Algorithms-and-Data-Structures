// Given an array of positive integers, some elements appear twice and others appear once.
// Find all the elements that appear twice in this array. Note that you can return the elements in any order.

function findAllDuplicates(arr) {

    const result = []

    const counter = {}

    for (let num of arr) {
        counter[num] = (counter[num] || 0) + 1
    }

    for (let key in counter){
        if (counter[key] > 1){
            result.push(key)
        }
    }

    return result
}



console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1])) // array with 2 and 3
console.log(findAllDuplicates([4, 3, 2, 1, 0])) // []
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])) // array with 3, 2, and 1