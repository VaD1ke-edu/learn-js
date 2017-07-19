"use strict";

// Создайте страницу, которая предлагает ввести два числа и выводит их сумму.

function CancelException() {}

function inputNumber(message = 'Введите число') {
    function _getPromptValue(message) {
        let value = prompt(message, '');
        if (value === null) throw new CancelException();

        return parseFloat(value);
    }

    let value = _getPromptValue(message);

    while (isNaN(value)) {
        value = _getPromptValue('Неверный ввод. Введите число!');
    }

    return value;
}

function getSum(values) {
    return Math.round(values.reduce(function (prev, next) {
        return prev + next;
    }) * 10) / 10;
}

let values = [];

try {
    while (true) {
        values.push(inputNumber());
    }
} catch(e) {
    console.log(e);
}

if (values.length) {
    alert(values.join(' + ') + ' = ' + getSum(values));
}
