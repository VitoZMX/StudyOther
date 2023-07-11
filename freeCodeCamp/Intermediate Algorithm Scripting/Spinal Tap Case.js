// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    return str.split(/(?=[A-Z])/).join(' ').split(/[ ,\-\' '\_]/).filter(Boolean).join('-').toLowerCase()
}

console.log(spinalCase('This Is Spinal Tap'))
console.log(spinalCase('Teletubbies say Eh-oh'))
console.log(spinalCase('AllThe-small Things'))