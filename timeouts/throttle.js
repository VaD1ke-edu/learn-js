// https://learn.javascript.ru/task/throttle

"use strict";

function throttle(f, interval) {
    let wasCalledInInterval   = false;
    let lastCalledFuncContext = {};

    return function callee() {
        if (wasCalledInInterval) {
            lastCalledFuncContext.this = this;
            lastCalledFuncContext.args = arguments;
            return;
        }

        f.apply(this, arguments);

        wasCalledInInterval = true;

        setTimeout(() => {
            wasCalledInInterval = false;
            callee.apply(lastCalledFuncContext.this, lastCalledFuncContext.args);
            lastCalledFuncContext = {};
        }, interval);
    }
}