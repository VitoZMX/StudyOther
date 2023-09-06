// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
    let res = undefined

    const FullText = "abcdefghijklmnopqrstuvwxyz"
    const firstLetter = str[0]
    const lastLetter = str[str.length - 1]

    const firstIndex = FullText.indexOf(firstLetter)
    const lastIndex = FullText.indexOf(lastLetter)
    const arr = FullText.slice(firstIndex, lastIndex).split('')


    arr.map((letter) => {
        if (!str.includes(letter)) res = letter
    })
    return res
}

fearNotLetter("abce")
console.log(fearNotLetter("abce"))
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"))