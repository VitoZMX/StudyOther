// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']

    if (vowels.includes(str[0])) {
        return str + 'way'
    } else {
        for (let k = 0; k < str.length; k++) {
            if (!consonants.includes(str[k])) {
                return str.substring(k) + str.substring(0, k) + 'ay'
            } else if (k === str.length - 1) {
                return str + 'ay'
            }
        }
    }
}

function translatePigLatin(str, charPos = 0) {
    return ['a', 'e', 'i', 'o', 'u'].includes(str[0])
        ? str + (charPos === 0 ? 'way' : 'ay')
        : charPos === str.length
            ? str + 'ay'
            : translatePigLatin(str.slice(1) + str[0], charPos + 1)
}

translatePigLatin("consonant")
console.log(translatePigLatin("consonant"))
console.log(translatePigLatin("glove"))
console.log(translatePigLatin("algorithm"))
console.log(translatePigLatin("rhythm"))