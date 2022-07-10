function checkNum(num, func) {
    if (func === undefined) {
        return num
    } else {
        return func(num)
    }
}

function zero(func) {
    return checkNum(0, func)
}

function one(func) {
    return checkNum(1, func)
}

function two(func) {
    return checkNum(2, func)
}

function three(func) {
    return checkNum(3, func)
}

function four(func) {
    return checkNum(4, func)
}

function five(func) {
    return checkNum(5, func)
}

function six(func) {
    return checkNum(6, func)
}

function seven(func) {
    return checkNum(7, func)
}

function eight(func) {
    return checkNum(8, func)
}

function nine(func) {
    return checkNum(9, func)
}

function plus(lastNum) {
    return function(firstNum) { return firstNum + lastNum }
}

function minus(lastNum) {
    return function(firstNum) {
        return firstNum - lastNum
    }
}

function times(lastNum) {
    return function(firstNum) { return firstNum * lastNum }
}

function dividedBy(lastNum) {
    return function(firstNum) { return Math.floor(firstNum / lastNum) }
}

// console.log(seven(times(five()))) // must return 35
// console.log(four(plus(nine()))) // must return 13
// console.log(eight(minus(three()))) // must return 5
// console.log(six(dividedBy(two()))) // must return 3

//**********************************************************************

['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
.forEach(function(name, n) {
    this[name] = function(f) { return f ? f(n) : n }
})

function plus(n) { return function(a) { return a + n } }

function minus(n) { return function(a) { return a - n } }

function times(n) { return function(a) { return a * n } }

function dividedBy(n) { return function(a) { return a / n } }

//**********************************************************************

'zero one two three four five six seven eight nine'.split(' ').forEach(
    (mth, num) => this[mth] = (f = val => val) => f(num)
)

let plus = (r) => (l) => l + r
let minus = (r) => (l) => l - r
let times = (r) => (l) => l * r
let dividedBy = (r) => (l) => l / r

//**********************************************************************

const
    numFunc = (num) => (calc) => calc ? calc(num) : num,
    zero = numFunc(0),
    one = numFunc(1),
    two = numFunc(2),
    three = numFunc(3),
    four = numFunc(4),
    five = numFunc(5),
    six = numFunc(6),
    seven = numFunc(7),
    eight = numFunc(8),
    nine = numFunc(9),
    plus = (b) => (a) => a + b,
    minus = (b) => (a) => a - b,
    times = (b) => (a) => a * b,
    dividedBy = (b) => (a) => a / b

//**********************************************************************

const zero = f => f ? f(0) : 0
const one = f => f ? f(1) : 1
const two = f => f ? f(2) : 2
const three = f => f ? f(3) : 3
const four = f => f ? f(4) : 4
const five = f => f ? f(5) : 5
const six = f => f ? f(6) : 6
const seven = f => f ? f(7) : 7
const eight = f => f ? f(8) : 8
const nine = f => f ? f(9) : 9

const plus = b => a => a + b
const minus = b => a => a - b
const times = b => a => a * b
const dividedBy = b => a => a / b