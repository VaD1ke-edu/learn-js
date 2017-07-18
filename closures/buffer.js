"use strict";

// В некоторых языках программирования существует объект «строковый буфер», который аккумулирует внутри себя значения. Его функционал состоит из двух возможностей:
// Добавить значение в буфер.
// Получить текущее содержимое.

function makeBuffer() {
    let buffer = [];

    return function (value) {
        if (value !== undefined) {
            buffer.push(String(value));
            return;
        }

        return buffer.join('');
    }
}

let buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

// получить текущее значение
alert( buffer() ); // Замыкания Использовать Нужно!