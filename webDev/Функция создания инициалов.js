// Base
function toInitials (name) {
    let nameArr = name.split(' ')
    let firstLettersArr = nameArr.map(function (el) {
        return el.slice(0,1).toUpperCase() + '.'
        })
    let initials = firstLettersArr.join('')
    return initials
}

// Advanced
function toInitials2 (name) {
    return name
        .split(' ')
        .map(function (el) {
            return el.slice(0,1).toUpperCase() + '.'
        })
        .join('')
}

// ES6
const toInitials3 = name =>
    name
    .split(' ')
    .map(el => `${el.slice(0,1).toUpperCase()}.`)
    .join('')

console.log(toInitials('Victor Zhavnerovskiy'))
console.log(toInitials('victor zhavnerovskiy'))
console.log(toInitials2('Victor Zhavnerovskiy'))
console.log(toInitials2('victor zhavnerovskiy'))
console.log(toInitials3('Victor Zhavnerovskiy'))
console.log(toInitials3('victor zhavnerovskiy'))