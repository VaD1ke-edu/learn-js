// https://learn.javascript.ru/task/object-with-getters-setters
//
// Напишите конструктор User для создания объектов:
// С приватными свойствами имя firstName и фамилия surname.
//     С сеттерами для этих свойств.
//     С геттером getFullName(), который возвращает полное имя.


"use strict";

function User(fullName = '') {
    this.fullName = fullName;

    const delimiter = ' ';

    Object.defineProperties(this, {
        'firstName': {
            get: ()  => {
                let parts = this.fullName.split(delimiter);
                return parts.length > 0 ? parts[0] : '';
            },
            set: val => {
                this.fullName = `${val} ${this.lastName}`;
            }
        },

        'lastName': {
            get: ()  => {
                let parts = this.fullName.split(delimiter);
                return parts.length > 1 ? parts[1] : '';
            },
            set: val => {
                this.fullName = `${this.firstName} ${val}`;
            }
        }
    });
}

var vasya = new User('Василий Попкин');

// чтение firstName/lastName
alert( vasya.firstName ); // Василий
alert( vasya.lastName ); // Попкин

// запись в lastName
vasya.lastName = 'Сидоров';

alert( vasya.fullName ); // Василий Сидоров
