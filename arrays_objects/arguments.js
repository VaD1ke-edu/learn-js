"use strict";

// Напишите функцию sum(...), которая возвращает сумму всех своих аргументов:
// sum() = 0
// sum(1) = 1
// sum(1, 2) = 3

function sum() {
    let result = 0;

    for (let i in arguments) {
        if (!arguments.hasOwnProperty(i)) continue;

        let value = parseFloat(arguments[i]);
        if (isNaN(value)) continue;

        result += value;
    }

    return Math.round(result * 10) / 10;
}

console.log(sum(1, 2));