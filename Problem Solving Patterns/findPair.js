// Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n.
// This function should return true if the pair exists or false if it does not.

function findPair(arr, n) {


    const frequency = {}

    for (let num of arr) {

        if (frequency.hasOwnProperty(num + n) || frequency.hasOwnProperty(num - n)) {
            return true
        }

        frequency[num] = num
    }
    return false

}




console.log(findPair([6, 1, 4, 10, 2, 4], 2))// true)
console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1))// true)
console.log(findPair([4, -2, 3, 10], -6))// true)
console.log(findPair([6, 1, 4, 10, 2, 4], 22))// false)
console.log(findPair([], 0))// false)
console.log(findPair([5, 5], 0))// true)
console.log(findPair([-4, 4], -8))// true)
console.log(findPair([-4, 4], 8))// true)
console.log(findPair([1, 3, 4, 6], -2))// true)
console.log(findPair([0, 1, 3, 4, 6], -2))// true)