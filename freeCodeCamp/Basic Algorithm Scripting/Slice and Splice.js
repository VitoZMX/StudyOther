// You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
    return arr2.slice(0, n).concat(arr1).concat(arr2.slice(n))
}

console.log(frankenSplice([1, 2], ["a", "b"], 1)) // ["a", 1, 2, "b"]