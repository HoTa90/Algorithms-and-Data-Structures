// Write a recursive function called capitalizeFirst.
// Given an array of strings, capitalize the first letter of each string in the array.


const capitalizeFirst = (arr) => {

    if (arr.length < 1) {
        return []
    }

    let str = arr[0]
    str = str[0].toUpperCase() + str.slice(1)

    return [str, ...capitalizeFirst(arr.slice(1))]


}


console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']
