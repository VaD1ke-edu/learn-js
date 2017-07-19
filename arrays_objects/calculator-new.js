// https://learn.javascript.ru/task/calculator-constructor
// Напишите функцию-конструктор Calculator, которая создает объект с тремя методами:
//
// Метод read() запрашивает два значения при помощи prompt и запоминает их в свойствах объекта.
// Метод sum() возвращает сумму запомненных свойств.
// Метод mul() возвращает произведение запомненных свойств.

"use strict";

const Calculator = function () {
    let firstOperand, secondOperand;

    function _readNumber() {
        return parseFloat(prompt('Введите число', ''));
    }

    this.read = () => {
        firstOperand  = _readNumber();
        secondOperand = _readNumber();
    };

    this.sum = () => firstOperand + secondOperand;

    this.mul = () => firstOperand * secondOperand;
};

let calculator = new Calculator();
calculator.read();

alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() );