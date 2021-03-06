function findSmallestInt(args) {
    return args.sort((a, b) => a - b)[0]
}

console.log(findSmallestInt([78, 56, 232, 12, 8])) //8
console.log(findSmallestInt([78, 56, 232, 12, 18])) //12
console.log(findSmallestInt([78, 56, 232, 412, 228])) //56
console.log(findSmallestInt([78, 56, 232, 12, 0])) //0
console.log(findSmallestInt([1, 56, 232, 12, 8])) //1

//*************************************************************

// function findSmallestInt(args) {
//     return Math.min(...args)
// }

// function findSmallestInt(args) {
//     return Math.min.apply(null, args)
// }

// function findSmallestInt(args) {
//     return args.reduce(function(prev, curr, index, array) {
//         return prev < curr ? prev : curr
//     })
// }

// function findSmallestInt(args) {
//     return Math.min.apply(this, args)
// }