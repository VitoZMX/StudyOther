// Дано натуральное число n. Напишите рекурсивную функцию, которая возвращает строку чисел от 1 до n, разделенных пробелом.

// Sample Input 1: 9
// Sample Output 1: 1 2 3 4 5 6 7 8 9
//*****************************************
// Sample Input 2: 8
// Sample Output 2: 1 2 3 4 5 6 7 8

function my_function(n) {
    if (n === 1) {
        return '1';
    } else {
        return my_function(n - 1) + ' ' + n;
    }
}

console.log('Моя функция c 9: ', my_function(9))
console.log('Моя функция c 8: ', my_function(8))


function no_my_function1(n) {
    if (n === 1)
        return n.toString();
    else
        return no_my_function1(n - 1) + " " + n;
}

console.log('Не моя функция1 c 9: ', no_my_function1(9))
console.log('Не моя функция1 c 8: ', no_my_function1(8))


function no_my_function2(n) {
    let res;
    if (n === 1) return '1';
    res = no_my_function2(n - 1);
    return res + ' ' + n;
}

console.log('Не моя функция2 c 9: ', no_my_function2(9))
console.log('Не моя функция2 c 8: ', no_my_function2(8))


function no_my_function3(x) {
    if (x <= 1) return 1;
    return no_my_function3(x - 1) + " " + x;
}

console.log('Не моя функция3 c 9: ', no_my_function3(9))
console.log('Не моя функция3 c 8: ', no_my_function3(8))