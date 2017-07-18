"use strict";

const Singleton = (function() {
    var instance = {};

    return function () {
        return instance;
    }
})();

let singleton1 = new Singleton(),
    singleton2 = new Singleton();

console.log(singleton1 === singleton2);
singleton1.foo = 'bar';

console.log(singleton2);