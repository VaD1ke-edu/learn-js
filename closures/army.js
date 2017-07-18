"use strict";

// Следующий код создает массив функций-стрелков shooters. По замыслу, каждый стрелок должен выводить свой номер:

function makeArmy() {
    let shooters = [];
    let shooter = function(i) { // функция-стрелок
        console.log(i); // выводит свой номер
    };

    for (let i = 0; i < 10; i++) {

        shooters.push(function(i) { // функция-стрелок
            console.log(i); // выводит свой номер
        });
    }

    return shooters;
}

var army = makeArmy();

army[0](); // стрелок выводит 10, а должен 0
army[5](); // стрелок выводит 10...