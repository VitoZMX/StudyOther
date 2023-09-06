// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

// Remember, you can access object properties through either dot notation or [] notation.

function truthCheck(collection, pre) {
    let res = false
    
    for (let i = 0; i < collection.length; i++) {
        if (pre in collection[i]) {
            if (!collection[i][pre]) {
                return false
            }
            res = true
        } else {
            return false
        }
    }
    return res
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {
    name: "Naomi",
    role: "",
    isBot: false
}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot")
console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {
    name: "Naomi",
    role: "",
    isBot: false
}, {name: "Camperbot", role: "Bot", isBot: true}], "name"))    // true
console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {
    name: "Naomi",
    role: "",
    isBot: false
}, {name: "Camperbot", role: "Bot", isBot: true}], "role"))    // false
console.log(truthCheck([{name: "Quincy", username: "QuincyLarson"}, {
    name: "Naomi",
    username: "nhcarrigan"
}, {name: "Camperbot"}], "username"))    // false