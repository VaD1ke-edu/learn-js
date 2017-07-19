// https://learn.javascript.ru/task/calculator-extendable
// Напишите конструктор Calculator, который создаёт расширяемые объекты-калькуляторы.

"use strict";

const WrongMethodException = function () {
    this.message = 'Method does not exist';
};

const Calculator = function () {
    let methods = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b
    };

    this.calculate = command => {
        let curOp, operands;
        for (let operation in methods) {
            operands = command.split(operation);
            if (operands.length === 2) {
                curOp = operation;
                break;
            }
        }
        if (curOp && curOp in methods) {
            return methods[curOp](parseFloat(operands[0]), parseFloat(operands[1]));
        }

        throw new WrongMethodException();
    };

    this.addMethod = (op, callback) => {
        methods[op] = callback;
        return this;
    }
};

try {

    let powerCalc = new Calculator;
    powerCalc.addMethod('*', function(a, b) {
        return a * b;
    });
    powerCalc.addMethod('/', function(a, b) {
        return a / b;
    });
    powerCalc.addMethod('**', function(a, b) {
        return Math.pow(a, b);
    });

    let result = powerCalc.calculate("2 ** 3");
    alert( result ); // 8
} catch (e) {
    if (e.message) {
        console.log(e.message);
    }
}
