// Base
function sumDigits1(number) {
    let moduleNumber = Math.abs(number)
    let str = moduleNumber.toString()
    let arr = str.split('')
    let res = arr.reduce(function (sum, cur) {
        return Number(sum) + Number(cur)
    }, 0)
    return res
}

// Advanced
function sumDigits2(num) {
    return Math.abs(num)
        .toString()
        .split('')
        .reduce(function (sum, cur) {
            return +sum + +cur
        }, 0)
}

// ES6
const sumDigits3 = num =>
    Math.abs(num)
        .toString()
        .split('')
        .reduce(function (sum, cur) {
            return +sum + +cur
        }, 0)

console.log(sumDigits1(32))
console.log(sumDigits1(-32))
console.log(sumDigits2(32))
console.log(sumDigits2(-32))
console.log(sumDigits3(32))
console.log(sumDigits3(-32))