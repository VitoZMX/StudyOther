// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
    arr.sort(function (a, b) {
        return a - b
    })

    let res = arr[0]
    for (let i = arr[0]; i < arr[1]; i++) {
        res += i + 1
    }
    return res
}

console.log('[1, 4]: ', sumAll([1, 4]))
console.log('[4, 1]: ', sumAll([4, 1]))
console.log('[5, 10]: ', sumAll([5, 10]))
console.log('[10, 5]: ', sumAll([10, 5]))


//*********Solution 1*************************************

function sumAll1(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let sumBetween = 0;
    for (let i = min; i <= max; i++) {
        sumBetween += i;
    }
    return sumBetween;
}

//*********Solution 2*************************************

const sumAll2 = arr => {
    const startNum = arr[0]
    const endNum = arr[1]

    const numCount = Math.abs(startNum - endNum) + 1

    const sum = ((startNum + endNum) * numCount) / 2
    return sum
}

//*********Solution 3*************************************

function sumAll3(arr) {
    let sumBetween = 0
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        sumBetween += i
    }
    return sumBetween
}

//*********Solution 4*************************************

function sumAll4(arr) {
    const [first, last] = [...arr].sort((a, b) => a - b)
    return first !== last
        ? first + sumAll([first + 1, last])
        : first
}