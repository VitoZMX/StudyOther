// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

function myReplace(str, before, after) {
    let afterRef = after.charAt(0)

    if (before.charAt(0) === before.charAt(0).toUpperCase()) {
        afterRef = afterRef.toUpperCase()
    } else {
        afterRef = afterRef.toLowerCase()
    }

    const arr = str.split(' ')
    const numWord = arr.indexOf(before)
    arr[numWord] = afterRef + after.slice(1)
    return arr.join(' ')
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))
console.log(myReplace("I think we should look up there", "up", "Down"))
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))