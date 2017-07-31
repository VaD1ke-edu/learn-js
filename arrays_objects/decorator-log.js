// http://learn.javascript.ru/task/logging-decorator
// Создайте декоратор makeLogging(f, log), который берет функцию f и массив log.
// Он должен возвращать обёртку вокруг f, которая при каждом вызове записывает («логирует») аргументы в log, а затем передает вызов в f.

"use strict";

function work(a) {
    console.log(`work(${a})`)
}

function makeLogging(f, log) {
    return function() {
        log.push(arguments[0]);
        return f.apply(this, arguments);
    }
}

let log = [];
work = makeLogging(work, log);

work(1); // 1, добавлено в log
work(5); // 5, добавлено в log

for (let i = 0; i < log.length; i++) {
    alert('Лог:' + log[i]); // "Лог:1", затем "Лог:5"
}