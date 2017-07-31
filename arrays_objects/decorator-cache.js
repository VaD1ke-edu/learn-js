// http://learn.javascript.ru/task/caching-decorator
// Создайте декоратор makeCaching(f), который берет функцию f и возвращает обертку, которая кеширует её результаты.
// В этой задаче функция f имеет только один аргумент, и он является числом.
//   При первом вызове обертки с определенным аргументом – она вызывает f и запоминает значение.
//   При втором и последующих вызовах с тем же аргументом возвращается запомненное значение.

"use strict";

function f(x) {
    return Math.random() * x; // random для удобства тестирования
}

function makeCaching(f) {
    let cache = {};

    return function(value) {
        if (!(value in cache)) {
            cache[value] = f.call(this, value);
        }

        return cache[value];
    }
}

f = makeCaching(f);

let a, b;

a = f(1);
b = f(1);
alert(a === b); // true (значение закешировано)

b = f(2);
alert(a === b); // false, другой аргумент => другое значение
