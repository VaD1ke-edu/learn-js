// https://learn.javascript.ru/task/calculator
// Создайте объект calculator с тремя методами:
//
// read() запрашивает prompt два значения и сохраняет их как свойства объекта
// sum() возвращает сумму этих двух значений
// mul() возвращает произведение этих двух значений

"use strict";

const calculator = {
    read: () => {
        function readNumber() {
            return parseFloat(prompt('Введите число', ''));
        }

        this.firstOperand = readNumber();
        this.secondOperand = readNumber();
    },

    sum: () => this.firstOperand + this.secondOperand,

    mul: () => this.firstOperand * this.secondOperand
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );