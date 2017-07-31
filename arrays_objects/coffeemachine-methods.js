// https://learn.javascript.ru/task/add-public-coffeemachine

"use strict";
function basic() {
    function CoffeeMachine(power, capacity) {
        const WATER_HEAT_CAPACITY = 4200;

        let waterAmount = 0;

        let getTimeToBoil = () => waterAmount * WATER_HEAT_CAPACITY * 80 / power;

        let onReady = () => {alert( 'Кофе готов!' );};


        this.setWaterAmount = amount => {
            if (amount < 0) {
                throw new Error("Значение должно быть положительным");
            }
            if (amount > capacity) {
                throw new Error("Нельзя залить больше, чем " + capacity);
            }

            waterAmount = amount;
        };

        this.addWater = amount => {
            let tmpWater = waterAmount + amount;
            if (amount < 0) {
                throw new Error("Значение должно быть положительным");
            }
            if (tmpWater > capacity) {
                throw new Error("Нельзя залить больше, чем " + capacity);
            }

            waterAmount = tmpWater;
        };

        this.run = () => {
            setTimeout(onReady, getTimeToBoil());
        };
    }

    let coffeeMachine = new CoffeeMachine(100000, 400);

    try {
        coffeeMachine.addWater(200);
        coffeeMachine.addWater(100);
//  coffeeMachine.addWater(300); // Нельзя залить больше, чем 400
        coffeeMachine.run();
    } catch (e) {
        alert(e.message);
    }
}


// https://learn.javascript.ru/task/coffeemachine-add-isrunning

function isRunning() {
    function CoffeeMachine(power, capacity) {
        const WATER_HEAT_CAPACITY = 4200;

        let waterAmount = 0;
        let isRunning   = false;

        let onReady = () => {
            alert('Кофе готов!');
        };

        let getTimeToBoil = () => waterAmount * WATER_HEAT_CAPACITY * 80 / power;

        this.setWaterAmount = amount => {
            // ... проверки пропущены для краткости
            waterAmount = amount;
            return this;
        };

        this.getWaterAmount = () => waterAmount;

        this.setOnReady = callback => {
            onReady = callback;
            return this;
        };

        this.run = () => {
            isRunning = true;

            setTimeout(() => {
                isRunning = false;
                onReady();
            }, getTimeToBoil());
        };

        this.isRunning = () => isRunning;
    }

    let coffeeMachine = new CoffeeMachine(20000, 500);
    coffeeMachine.setWaterAmount(100);

    alert( 'До: ' + coffeeMachine.isRunning() ); // До: false

    coffeeMachine.run();
    alert( 'В процессе: ' + coffeeMachine.isRunning() ); // В процессе: true

    coffeeMachine.setOnReady(function() {
        alert( "После: " + coffeeMachine.isRunning() ); // После: false
    });
}