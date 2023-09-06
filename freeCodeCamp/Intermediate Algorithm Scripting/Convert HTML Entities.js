// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
    const x = {
        '&': '&amp;',
        '<': '&lt;',
        '"': '&quot;',
        '>': '&gt;',
        '\'': '&apos;',
    }

    return str.split('').map((char) => {
        return x[char] || char
    }).join('')
}

convertHTML("Dolce & Gabbana")
console.log(convertHTML("Dolce & Gabbana"))