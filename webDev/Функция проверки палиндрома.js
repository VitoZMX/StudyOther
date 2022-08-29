// Base
function isPalindrome1(string) {
    let arr = string.split('')
    let reversArr = arr.reverse()
    let resString = reversArr.join('')
    let res = string === resString
    return res
}

// Advanced
function isPalindrome2(str) {
    return str === str.split('').reverse().join('')
}

// ES6
const isPalindrome3 = str => str === str.split('').reverse().join('')

console.log(isPalindrome1('тест'))
console.log(isPalindrome1('шошоошош'))
console.log(isPalindrome2('тест'))
console.log(isPalindrome2('шошоошош'))
console.log(isPalindrome3('тест'))
console.log(isPalindrome3('шошоошош'))