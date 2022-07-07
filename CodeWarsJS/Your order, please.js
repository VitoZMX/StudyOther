function order(words) {

    if (words.length == 0) {
        return words
    }

    let res = []
    let arr = words.split(' ')
    let count = arr.length

    while (count != 0) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                let x = Number(arr[i][j])
                if (x == count) {
                    res.unshift(arr[i])
                        //console.log(x)
                        //console.log(res)
                    count--
                }
            }
        }
    }
    return res.join(' ')
}

console.log(order("is2 Thi1s T4est 3a")) //"Thi1s is2 3a T4est"
console.log(order("4of Fo1r pe6ople g3ood th5e the2")) //"Fo1r the2 g3ood 4of th5e pe6ople"
console.log(order("")) //"", "empty input should return empty string"

//*******************************************************

// function order(words) {
//     return words.split(' ').sort(function(a, b) {
//         return a.match(/\d/) - b.match(/\d/);
//     }).join(' ');
// }

// function order(words) {
//     return words.split(' ').sort((wordA, wordB) => wordA.match(/\d+/) > wordB.match(/\d+/)).join(' ')
// }