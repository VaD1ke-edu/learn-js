// https://learn.javascript.ru/task/setter-onready

"use strict";

function CoffeeMachine(power, capacity) {
    const WATER_HEAT_CAPACITY = 4200;

    let waterAmount = 0;

    let onReady       = () => { alert( 'Кофе готов!' ) };
    let getTimeToBoil = () => waterAmount * WATER_HEAT_CAPACITY * 80 / power;

    this.setWaterAmount = amount => {
        // ... проверки пропущены для краткости
        waterAmount = amount;
    };

    this.getWaterAmount = () => waterAmount;

    this.setOnReady = callback => {
        onReady = callback;
        return this;
    };

    this.run = () => {
        setTimeout(onReady, getTimeToBoil());
    };
}

let coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(150);

coffeeMachine.setOnReady(function() {
    let amount = coffeeMachine.getWaterAmount();
    alert( 'Готов кофе: ' + amount + 'мл' ); // Кофе готов: 150 мл
});

coffeeMachine.run();
