"use strict";

// В задачу по буфферу добавить метод buffer.clear(), который будет очищать текущее содержимое буфера:

function makeBuffer() {
    let buffer = [];

    let response = value => {
        if (value !== undefined) {
            buffer.push(String(value));
            return;
        }

        return buffer.join('');
    };

    response.clear = () => {
        buffer = [];
    };

    return response;
}

let buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

alert( buffer() ); // Замыкания Использовать Нужно!

buffer.clear();

alert( buffer() ); // пусто