console.log("This 'StudyOther'-git repository")

async function getResponce() {
    let response = await fetch('https://api.worldoftanks.ru/wot/encyclopedia/vehicles/?application_id=c4a80daf163b5d68b2d8bd7801d040d0&fields=name%2C+tier%2Ctype%2C+description%2Cimages%2Cmultination%2C+is_gift%2C+is_premium%2C+nation%2C+price_credit%2C+price_gold%2C+tag%2C+tank_id%2C++&nation=usa', {
        method: 'GET',
    });
    let content = await response.json();
    console.log(content)
}
//getResponce()

function XO(str) {
    let a = str.toLowerCase().split()
    let x = 0
    let o = 0

    for (let i = 0; i < a[0].length; i++) {
        if (a[0][i] === 'x') {
            x++
        } else if (a[0][i] === 'o') {
            o++
        }
    }
    console.log(x)
    console.log(o)
    if (x === o) {
        console.log(x === o)
    } else {
        console.log(x === o)
    }

}

// XO("xxzo")

let a = {
    name: 'vito',
    age: 24,
    skills: ['react', 'redux', 'js'],
    from: {
        vitebsk: 300,
        minsk: 10,
        age: {
            1: 'loluk'
        }
    },
}

let b = {...a }
b.from = {...a.from }
b.skills = [...a.skills]
b.skills.push(777)
b.name = "chemp"

// console.log(a)
// console.log(b)
// console.log(a.name === b.name)


const contacts = [{
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {

    let i = 0;

    while (i < contacts.length) {
        if (contacts[i].firstName == name && contacts[i].hasOwnProperty(prop)) {
            return contacts[i][prop]
        } else if (contacts[i].firstName == name && contacts[i].hasOwnProperty(prop) == false) {
            return 'No such property'
        }
        i++
    }
    if (i == contacts.length) {
        return 'No such contact'
    }
}
// console.log(lookUpProfile("Kristian", "lastName"))
// console.log(lookUpProfile("Sherlock", "likes"))
// console.log(lookUpProfile("Harry", "likes"))
// console.log(lookUpProfile("Bob", "number"))
// console.log(lookUpProfile("Bob", "potato"))
// console.log(lookUpProfile("Akira", "address"))

function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countdown(n - 1);
        countArray.unshift(n);
        return countArray;
    }
}

//console.log(countdown(10))
//console.log(countdown(5)))
