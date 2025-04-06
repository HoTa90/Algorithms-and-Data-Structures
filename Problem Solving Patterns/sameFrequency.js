// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities: Time: O(N)

function sameFrequency(num1, num2) {

    const counter = {}

    for (let num of num1.toString()) {
        counter[num] ? counter[num] += 1 : counter[num] = 1
    }

    for (let num of num2.toString()) {
        if (!counter[num]) {
            return false
        }

        counter[num] -= 1
    }

    return true
}



console.log(sameFrequency(182, 281)) // true)
console.log(sameFrequency(34, 14))// false)
console.log(sameFrequency(3589578, 5879385)) // true)
console.log(sameFrequency(22, 222))// false)