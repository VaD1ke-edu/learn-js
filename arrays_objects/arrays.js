"use strict";

// Создайте массив styles с элементами «Джаз», «Блюз».
// Добавьте в конец значение «Рок-н-Ролл»
// Замените предпоследнее значение с конца на «Классика». Код замены предпоследнего значения должен работать для массивов любой длины.
// Удалите первое значение массива и выведите его alert.
// Добавьте в начало значения «Рэп» и «Регги».

let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-Ролл'); // или styles[styles.length - 1] = 'Рок-н-Ролл';
styles[styles.length - 2] = 'Классика';
console.log(styles.shift());
styles.unshift('Рэп');
styles.unshift('Регги');
console.log(styles);


// Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
// Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
// При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
// Выводит сумму всех значений массива

function CancelException() {}

function inputNumber(message = 'Введите число') {
    function _getPromptValue(message) {
        let value = prompt(message, '');
        if (value === null) throw new CancelException();

        return parseFloat(value).toPrecision(2);
    }

    let value = _getPromptValue(message);

    while (isNaN(value)) {
        value = _getPromptValue('Неверный ввод. Введите число!');
    }

    return value;
}

function getSum(values) {
    return values.reduce(function (prev, next) {
        return prev + next;
    }).toPrecision(2);
}

let values = [];

try {
    while (true) {
        values.push(inputNumber());
    }
} catch(e) {
}

if (values.length) {
    console.log(values.join(' + ') + ' = ' + getSum(values));
}


// Переписать цикл через map
// var arr = ["Есть", "жизнь", "на", "Марсе"];
// var arrLength = [];
// for (var i = 0; i < arr.length; i++) {
//     arrLength[i] = arr[i].length;
// }
// alert( arrLength ); // 4,5,2,5

const arr = ['Есть', 'жизнь', 'на', 'Марсе'];
let arrLength = arr.map(value => String(value).length);
alert( arrLength ); // 4,5,2,5
