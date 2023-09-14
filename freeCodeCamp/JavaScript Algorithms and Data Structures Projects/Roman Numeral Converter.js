// Convert the given number into a roman numeral.

// Roman numerals	Arabic numerals
// M: 1000
// CM: 900
// D: 500
// CD: 400
// C: 100
// XC: 90
// L: 50
// XL: 40
// X: 10
// IX: 9
// V: 5
// IV: 4
// I: 1

// All roman numerals answers should be provided in upper-case.

function convertToRoman(number) {
    const romanNumerals = [
        {value: 1000, numeral: 'M'},
        {value: 900, numeral: 'CM'},
        {value: 500, numeral: 'D'},
        {value: 400, numeral: 'CD'},
        {value: 100, numeral: 'C'},
        {value: 90, numeral: 'XC'},
        {value: 50, numeral: 'L'},
        {value: 40, numeral: 'XL'},
        {value: 10, numeral: 'X'},
        {value: 9, numeral: 'IX'},
        {value: 5, numeral: 'V'},
        {value: 4, numeral: 'IV'},
        {value: 1, numeral: 'I'}
    ];

    let result = ''

    for (let i = 0; i < romanNumerals.length; i++) {
        while (number >= romanNumerals[i].value) {
            result += romanNumerals[i].numeral
            number -= romanNumerals[i].value
        }
    }

    return result
}

convertToRoman(36)                   // XXXVI
console.log('2 to II: ', convertToRoman(2))       // II
console.log('3 to III: ', convertToRoman(3))       //  III
console.log('4 to IV: ', convertToRoman(4))       //  IV
console.log('5 to V: ', convertToRoman(5))       //  V
console.log('9 to IX: ', convertToRoman(9))       //  IX
console.log('12 to XII: ', convertToRoman(12))      //  XII
console.log('16 to XVI: ', convertToRoman(16))      //  XVI
console.log('29 to XXIX: ', convertToRoman(29))      //  XXIX
console.log('44 to XLIV: ', convertToRoman(44))      //  XLIV
console.log('45 to XLV: ', convertToRoman(45))      //  XLV
console.log('68 to LXVIII: ', convertToRoman(68))      //  LXVIII
console.log('83 to LXXXIII: ', convertToRoman(83))      //  LXXXIII
console.log('97 to XCVII: ', convertToRoman(97))      //  XCVII
console.log('99 to XCIX: ', convertToRoman(99))      //  XCIX
console.log('230 to CCXXX: ', convertToRoman(230))      //  CCXXX
console.log('301 to CCCI: ', convertToRoman(301))      //  CCCI
console.log('340 to CCCXL: ', convertToRoman(340))      //  CCCXL
console.log('400 to CD: ', convertToRoman(400))     //  CD
console.log('500 to D: ', convertToRoman(500))     //  D
console.log('501 to DI: ', convertToRoman(501))     //  DI
console.log('649 to DCXLIX: ', convertToRoman(649))     //  DCXLIX
console.log('798 to DCCXCVIII: ', convertToRoman(798))     //  DCCXCVIII
console.log('891 to DCCCXCI: ', convertToRoman(891))     //  DCCCXCI
console.log('1000 to M: ', convertToRoman(1000))    //  M
console.log('1004 to MIV: ', convertToRoman(1004))    //  MIV
console.log('1006 to MVI: ', convertToRoman(1006))    //  MVI
console.log('1023 to MXXIII: ', convertToRoman(1023))    //  MXXIII
console.log('2014 to MMXIV: ', convertToRoman(2014))    //  MMXIV
console.log('3999 to MMMCMXCIX: ', convertToRoman(3999))    //  MMMCMXCIX