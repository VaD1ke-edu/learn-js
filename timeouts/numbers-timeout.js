// https://learn.javascript.ru/task/output-numbers-100ms-settimeout

"use strict";

function printNumbersInterval(interval = 100, numbersQty = 20) {
    let i = 1;

    function showCurNumber() {
        console.log(i++);
        if (i <= numbersQty) {
            setTimeout(showCurNumber, interval);
        }
    }

    setTimeout(showCurNumber, interval);
}

printNumbersInterval();

