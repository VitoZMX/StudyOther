//  Return the provided string with the first letter of each word capitalized.
//  Make sure the rest of the word is in lower case.

//  For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
    let res = []

    for (let i = 0; i < str.split(' ').length; i++) {
        res.push(str.split(' ')[i][0].toUpperCase() + str.split(' ')[i].slice(1).toLowerCase())
    }
    return res.join(' ')
}

console.log(titleCase("I'm a little tea pot"))