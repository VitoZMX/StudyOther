// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
    arr.sort((a, b) => a - b)
    const startNum = arr[0]
    const endNum = arr[1]

    function findGreatestCommonDivisor(a, b) {
        if (b === 0) {
            return a;
        }
        return findGreatestCommonDivisor(b, a % b)
    }

    function findLeastCommonMultiple(a, b) {
        const gcd = findGreatestCommonDivisor(a, b)
        const lcm = Math.abs(a * b) / gcd
        return lcm
    }
    
    let res = startNum

    for (let i = startNum; i <= endNum; i++) {
        res = findLeastCommonMultiple(res, i)
    }

    return res
}

smallestCommons([1, 5])
console.log(smallestCommons([1, 5]))
console.log(smallestCommons([5, 1]))