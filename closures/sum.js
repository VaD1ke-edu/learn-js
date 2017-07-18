"use strict";

// Напишите функцию sum, которая работает так: sum(a)(b) = a+b.

const sum = value => {
    return nextValue => value + nextValue;
};

sum(1)(2);
sum(5)(-1);