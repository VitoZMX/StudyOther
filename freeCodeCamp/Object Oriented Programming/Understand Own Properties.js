// In the following example, the Bird constructor defines two properties: name and numLegs:

function Bird(name) {
    this.name = name
    this.numLegs = 2
}

let duck = new Bird("Donald")
// name and numLegs are called own properties, because they are defined directly on the instance object. That means that duck and canary each has its own separate copy of these properties. In fact every instance of Bird will have its own copy of these properties. The following code adds all of the own properties of duck to the array ownProps:

let ownPropsX = []

for (let property in duck) {
    if (duck.hasOwnProperty(property)) {
        ownPropsX.push(property)
    }
}

console.log(ownPropsX)
// The console would display the value ["name", "numLegs"].

// Add the own properties of canary to the array ownProps.

function Bird(name) {
    this.name = name
    this.numLegs = 2
}

let canary = new Bird("Tweety")
let ownProps = []

for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
        ownProps.push(property)
    }
}

// console.log(ownProps)