// You have now seen two kinds of properties: own properties and prototype properties. Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype.

function Bird(name) {
    this.name = name  //own property
}

Bird.prototype.numLegs = 2 // prototype property

let duck = new Bird("Donald");
// Here is how you add duck's own properties to the array ownProps and prototype properties to the array prototypeProps:

let ownPropsX = []
let prototypePropsX = []

for (let property in duck) {
    if (duck.hasOwnProperty(property)) {
        ownPropsX.push(property)
    } else {
        prototypePropsX.push(property)
    }
}

console.log(ownPropsX)
console.log(prototypePropsX)
console.log(ownPropsX)
// would display ["name"] in the console, and console.log(prototypeProps) would display ["numLegs"].

// Add all of the own properties of beagle to the array ownProps. Add all of the prototype properties of Dog to the array prototypeProps.

function Dog(name) {
    this.name = name
}

Dog.prototype.numLegs = 4

let beagle = new Dog("Snoopy")

let ownProps = []
let prototypeProps = []

for (let property in beagle) {
    if (beagle.hasOwnProperty(property)) {
        ownProps.push(property)
    } else {
        prototypeProps.push(property)
    }
}

console.log(ownProps)
console.log(prototypeProps)
console.log(ownProps)