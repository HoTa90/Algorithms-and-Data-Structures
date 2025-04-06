function countUniqueValues(arr) {  // multiple pointers approach
    if (arr.length === 0) {
        return 0
    }
    const copyArr = arr.slice()

    let i = 0;

    for (let j = 1; j < copyArr.length; j++) {
        if (copyArr[i] !== copyArr[j]) {
            i++
            copyArr[i] = copyArr[j]
        }
    }

    return i + 1

}

function countUniqueValues2(arr) { // counter object approach
    if (arr.length === 0) {
        return 0
    }

    const counter = {}

    for (let num of arr) {
        counter[num] = (counter[num] || 0) + 1
    }

    return Object.keys(counter).length
}


console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])) // 4