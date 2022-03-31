const arr = [1, 4, 1, 5, 4];

function countUnique(arr) {
    let uniqueVal = 0
    arr.forEach((el, index) => {
        if (arr.indexOf(el) === index) {
            uniqueVal += 1
        }
    })

    return uniqueVal
}

console.log(countUnique([1, 4, 1, 5, 4]));