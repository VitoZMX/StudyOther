// Remove all falsy values from an array. Return a new array; do not mutate the original array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.

function bouncer(arr) {
    let newArr = arr.filter((e) => {
        return e
    })

    return newArr
}

console.log(bouncer([7, "ate", "", false, 9]))