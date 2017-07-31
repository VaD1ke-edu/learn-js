// https://learn.javascript.ru/task/debounce

function debounce(f, interval) {
    let wasCalledInInterval = false;

    return function() {
        if (wasCalledInInterval) {
            return;
        }

        f.apply(this, arguments);

        wasCalledInInterval = true;

        setTimeout(() => { wasCalledInInterval = false}, interval);
    }
}

let f = debounce(f, 1000);

f(1); // выполнится сразу же
f(2); // игнор

setTimeout( function() { f(3) }, 100); // игнор (прошло только 100 мс)
setTimeout( function() { f(4) }, 1100); // выполнится
setTimeout( function() { f(5) }, 1500); // игнор

