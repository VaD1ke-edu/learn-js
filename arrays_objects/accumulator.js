// https://learn.javascript.ru/task/accumulator
// Напишите функцию-конструктор Calculator, которая создает объект с тремя методами:
//
// Метод read() запрашивает два значения при помощи prompt и запоминает их в свойствах объекта.
// Метод sum() возвращает сумму запомненных свойств.
// Метод mul() возвращает произведение запомненных свойств.

"use strict";

const Accumulator = function (value = 0) {
    this.value = value;

    function _readNumber() {
        return parseFloat(prompt('Введите число', ''));
    }

    this.read = () => {
        value += _readNumber();
    };

    Object.defineProperty(this, 'value', {
        get: ()  => value,
        set: val => { value = val }
    })
};

var accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению
alert( accumulator.value ); // выведет текущее значение