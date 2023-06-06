// Write a function that splits an array (first argument) into groups
//  the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    let resArr = []

    for (let i = 0; i < arr.length; i += size) {
        let x = arr.slice(i, i + size)
        resArr.push(x)
    }
    return resArr
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)) // [[0, 1, 2, 3], [4, 5]]