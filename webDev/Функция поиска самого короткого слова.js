// Base
function findShort1(string) {
    let wordsArr = string.split(' ')
    let sortedWordsArr = wordsArr.sort(function (a, b) {
        return a.length - b.length
    })
    return sortedWordsArr[0]
}

// Advanced
function findShort2(string) {
    return string
        .split(' ')
        .sort(function (a, b) {
            return a.length - b.length
        })[0]
}

// ES6
const findShort3 = string =>
    string.split(' ')
        .sort((a, b) => a.length - b.length)[0]

console.log(findShort1('Привет мир это мой новое сообщение'))
console.log(findShort2('Привет мир это мой новое сообщение'))
console.log(findShort3('Привет мир это мой новое сообщение'))