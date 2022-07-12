function calc(...rest) {
    let x = [...rest]
    let res = null
    if (x.length % 2 != 0) {
        res = String(eval(x[0] + x[1] + BigInt(x[2])))
        x.splice(0, 3)
    }
    while (x.length != 0) {
        res = String(eval((res + x[0] + BigInt(x[1]))))
        x.splice(0, 2)
    }
    return String(res)
}
module.exports = { calc }
    // console.log(calc('3', '+', '2')) //'5' 
    // console.log(calc('6', '/', '3')) //'2'
    // console.log(calc('2', '+', '2', '*', '2')) //'8'
    // console.log(calc('3', '+', '3', '*', '3', '-', '2')) //'16'