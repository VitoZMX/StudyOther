// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Note: You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
    const diff1 = arr1.filter(item => !arr2.includes(item))
    const diff2 = arr2.filter(item => !arr1.includes(item))
    return [...diff1, ...diff2]
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))


//*********Solution 1*************************************

function diffArray1(arr1, arr2) {
    let newArr = []

    newArr = arr1.concat(arr2)

    function checkNum(num) {
        if (arr1.indexOf(num) === -1 || arr2.indexOf(num) === -1) {
            return num
        }
    }

    return newArr.filter(checkNum)
}