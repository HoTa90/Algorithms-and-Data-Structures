// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

function flatten(arr) {

    let temp = [];

    arr.forEach(element => {
        if (Array.isArray(element)) {
            temp.push(...flatten(element))
        } else {
            temp.push(element)
        }
    });
    return temp
}

console.log(flatten([1, 2, 3, [4, 5]])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3