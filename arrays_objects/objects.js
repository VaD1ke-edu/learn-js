"use strict";

// Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
// Если объект пустой, то результат должен быть 0.

const salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

function getSum(object) {
    let sum = 0;
    for (let i in object) {
        if (object.hasOwnProperty(i)) {
            sum += parseFloat(object[i]);
        }
    }
    return sum.round(2);
}

console.log(getSum(salaries));


// Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.
// Если объект пустой, то пусть он выводит «нет сотрудников».

const Employee = function () {
    this.name = this.salary = null;
};

function getMaxPaidEmployee(object) {
    if (!Object.keys(object).length) return null;

    let topEmployee = new Employee();
    for (let key in object) {
        if (!object.hasOwnProperty(key)) continue;

        if (topEmployee.salary === null || topEmployee.salary < parseFloat(object[key])) {
            topEmployee.name   = key;
            topEmployee.salary = parseFloat(object[key]);
        }
    }

    return topEmployee;
}

let topEmployee = getMaxPaidEmployee(salaries);
console.log(topEmployee === null ? 'нет сотрудников' : topEmployee.name + ' ' + topEmployee.salary);
