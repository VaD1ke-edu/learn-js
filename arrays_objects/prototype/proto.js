// http://learn.javascript.ru/task/rewrite-by-class

"use strict";

function CoffeeMachine(power) {
    this.waterAmount = 0;
    this.power = power;

    Object.defineProperty(this, 'WATER_HEAT_CAPACITY', {
        value: 4200,
        writable: false,
        configurable: false
    });
}

CoffeeMachine.prototype.getTimeToBoil = function() {
    return this.waterAmount * this.WATER_HEAT_CAPACITY * 80 / this.power;
};

CoffeeMachine.prototype.run = function() {
    setTimeout(() => {
        alert('Кофе готов!');
    }, this.getTimeToBoil());
};

CoffeeMachine.prototype.setWaterAmount = function(amount) {
    this.waterAmount = amount;
    return this;
};

let coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();