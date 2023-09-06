// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2)
// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

function addTogether(a, b) {
    if (arguments.length === 2) {
        if (b === undefined) {
            return b
        }
    }
    if (typeof a !== 'number' || (b !== undefined && typeof b !== 'number')) {
        return undefined
    }

    if (arguments.length === 1) {
        return function (b) {
            if (typeof b !== 'number') {
                return undefined
            }
            return a + b
        }
    }
    return a + b
}

addTogether(2, 3)
console.log(addTogether(23, 30))    // 53
console.log(addTogether("2", 3))    // undefined
console.log(addTogether(5)(7))      // 12
console.log(addTogether(2)([3]))    // undefined