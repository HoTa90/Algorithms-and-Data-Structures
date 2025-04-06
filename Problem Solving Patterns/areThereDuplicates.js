// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.


function areThereDuplicates(...args) {

    args.sort()

    for (let j = 1; j < args.length; j++) {
        if (args[j] === args[j - 1]) {
            return true
        }
    }
    return false
}

function areThereDuplicates2(...args) {

    const counterObj = {};

    for (let char of args) {
        counterObj[char] = (counterObj[char] || 0) + 1
    }

    for (let key in counterObj) {
        if (counterObj[key] > 1) {
            return true
        }
    }

    return false

}


console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 