let isSquare = function(n) {
    return Number.isInteger(Math.sqrt(n))
}

console.log(isSquare(-1))
console.log(isSquare(0))
console.log(isSquare(25))
console.log(isSquare(26))

//**********************************

//const isSquare = n => Number.isInteger(Math.sqrt(n))

//const isSquare = n => Math.sqrt(n) % 1 === 0