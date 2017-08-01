// https://learn.javascript.ru/task/replace-property-getter
//
// Вам попал в руки код объекта User, который хранит имя и фамилию в свойстве this.fullName:
// Имя и фамилия всегда разделяются пробелом.
// Сделайте, чтобы были доступны свойства firstName и lastName, причём не только на чтение, но и на запись

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
