const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
}

// Only change code below this line

//const highToday = HIGH_TEMPERATURES.today                            // ES5
//const highTomorrow = HIGH_TEMPERATURES.tomorrow                      // ES5

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES // ES6

// Only change code above this line