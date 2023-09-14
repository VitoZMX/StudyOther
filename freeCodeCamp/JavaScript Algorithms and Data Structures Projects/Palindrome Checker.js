// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

// We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

// We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

function palindrome(str) {
    const symbol = [',', '_', '-', '.', ' ', '(', ')', '/',]

    let arr = str.toLowerCase().split('').map(el => {
        if (!symbol.includes(el)) {
            return el
        }
    })
    
    return arr.join('') === arr.reverse().join('')
}

palindrome("eye")
console.log(palindrome("eye"))                               // true
console.log(palindrome("A man, a plan, a canal. Panama"))    // true
console.log(palindrome("0_0 (: /-\ :) 0-0"))                 // true
console.log(palindrome("1 eye for of 1 eye."))               // false