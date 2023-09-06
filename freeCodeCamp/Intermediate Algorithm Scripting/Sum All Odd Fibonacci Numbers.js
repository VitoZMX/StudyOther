// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
    const arr = [0, 1]
    let res = 0

    for (let i = 2; i <= num; i++) {
        const prevNum1 = arr[i - 1]
        const prevNum2 = arr[i - 2]
        arr.push(prevNum1 + prevNum2)
    }
    arr.map((el => {
        if (el % 2 !== 0 && el <= num) {
            return res += Number(el)
        }
    }))
    return res
}

sumFibs(4)
console.log(sumFibs(4))
console.log(sumFibs(7))
console.log(sumFibs(10))
