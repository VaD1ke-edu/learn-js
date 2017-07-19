// https://learn.javascript.ru/task/format-date-polymorphic
// Напишите функцию formatDate(date), которая возвращает дату в формате dd.mm.yy.

"use strict";

function formatDate(value) {
    const millisecondsInSecond = 1000;
    let date;

    if (typeof value === 'string') {
        date = new Date(value);
    } else if (typeof value === 'number') {
        date = new Date(value * millisecondsInSecond);
    } else if (Array.isArray(value)) {
        date = new Date(value[0], value[1], value[2]);
    } else {
        date = value;
    }

    return date.toLocaleString('ru', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
    });
}

alert( formatDate('2011-10-02') ); // 02.10.11
alert( formatDate(1234567890) ); // 14.02.09
alert( formatDate([2014, 0, 1]) ); // 01.01.14
alert( formatDate(new Date(2014, 0, 1)) ); // 01.01.14