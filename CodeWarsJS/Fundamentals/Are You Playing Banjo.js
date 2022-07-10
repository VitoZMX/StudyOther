function areYouPlayingBanjo(name) {
    if (name.substr(0, 1).toLowerCase() == 'r') {
        return name + ' plays banjo'
    } else {
        return name + ' does not play banjo'
    }
}

console.log(areYouPlayingBanjo("Adam"))
console.log(areYouPlayingBanjo("Ringo"))
console.log(areYouPlayingBanjo("rolf"))

//*****************************************

// function areYouPlayingBanjo(name) {
//     return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
// }