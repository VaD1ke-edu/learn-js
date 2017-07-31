// https://learn.javascript.ru/task/getter-power

"use strict";

function CoffeeMachine(power, capacity) {
    let waterAmount = 0;

    this.setWaterAmount = amount => {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить воды больше, чем " + capacity);
        }

        waterAmount = amount;
    };

    this.getWaterAmount = () => waterAmount;
    this.getPower = () => power;
}

let machine = new CoffeeMachine(100, 200);
alert(machine.getPower());
