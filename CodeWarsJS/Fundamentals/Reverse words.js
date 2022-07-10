function reverseWords(str) {

    let arr = str.split(' ')
    let res = []

    // for (let i = 0; i < arr.length; i++) {
    //     res = res + ' ' + arr[i].split('').reverse().join('')
    // }

    arr.map(b => { res.push(b.split('').reverse().join('')) })
    return res.join(' ')
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.')) // 'ehT kciuq nworb xof spmuj revo eht yzal .god'
console.log(reverseWords('apple')) // 'elppa'
console.log(reverseWords('a b c d')) // 'a b c d'
console.log(reverseWords('double  spaced  words')) // 'elbuod  decaps  sdrow'

//***************************************************************************

// var reverseWords = (str) => str.split(" ").map(word => word.split('').reverse().join('')).join(" ")

// function reverseWords(str) {
//     return str.split(" ").map(x => x.split("").reverse().join("")).join(" ");
// }

// function reverseWords(str) {
//     // Go for it
//     //split words into seperate arrays
//     return str.split("").reverse().join("").split(" ").reverse().join(" ");
// }

// function reverseWords(str) {
//     return str.split(' ').map(str => str.split('').reverse().join('')).join(' ');
// }