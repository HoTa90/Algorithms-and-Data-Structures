

function naiveSearch(shortStr, longStr) {

    let match = 0

    for (let i = 0; i < longStr.length; i++) {
        for (let j = 0; j < shortStr.length; j++) {
            if (shortStr[j] !== longStr[i + j]) {
                break;
            }
            if (j === shortStr.length - 1) {

                match++
            }

        }
    }

    return match

}

console.log(naiveSearch('lol', 'aklsdkklasjdololakslol'))
console.log(naiveSearch('asd', 'addssdAqwea asd d  asd asd'))