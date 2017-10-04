// http://learn.javascript.ru/task/calculate-capitalization

class DepositCalculator {
    constructor(form, info, selectors, yearPercent = 12) {
        this.MONTH_INCREASE_STEP = parseFloat(yearPercent) / 12 / 100;

        this.form = form;
        this.info = info;

        this.moneyInput  = this.form.querySelector(selectors.form.money);
        this.monthSelect = this.form.querySelector(selectors.form.months);
        this.capitalizationFlag = this.form.querySelector(selectors.form.capital);

        this.moneyBefore = this.info.querySelector(selectors.info.moneyBefore);
        this.moneyAfter  = this.info.querySelector(selectors.info.moneyAfter);
        this.barBefore   = this.info.querySelector(selectors.info.barBefore);
        this.barAfter    = this.info.querySelector(selectors.info.barAfter);

        this._initEvents();
        this.calculate();
    }

    calculate() {
        let sum = parseFloat(this.moneyInput.value);
        if (!sum) {
            this._showInfo(0);
            return;
        }

        this._showInfo(this._calculateTotal(sum));
    }


    _showInfo(sum) {
        this.barAfter.style.height = sum / this.moneyInput.value * 100 + 'px';
        this.moneyBefore.innerHTML = this.moneyInput.value;
        this.moneyAfter.innerHTML  = sum;
    }

    _calculateTotal(startSum) {
        let sum = startSum;
        if (!this.capitalizationFlag.checked) {
            sum += sum * this.MONTH_INCREASE_STEP * this.monthSelect.value;
            return Math.round(sum);
        }

        for (let i = 0; i < this.monthSelect.value; i++) {
            sum += sum * this.MONTH_INCREASE_STEP;
        }
        return Math.round(sum);
    }

    _initEvents() {
        this._initInputCheck();
        this._initCalculation();
    }

    _initInputCheck() {
        this.moneyInput.addEventListener('keypress', ev => {
            const chr = getChar(ev);
            const isSpecialKey = ev.ctrlKey || ev.altKey || chr === null;

            if (!isSpecialKey && (chr < '0' || chr > '9')) {
                ev.preventDefault();
            }
        });
    }

    _initCalculation() {
        this.moneyInput.addEventListener('input', () => {this.calculate()});

        if (this.capitalizationFlag) {
            this.capitalizationFlag.addEventListener('click', () => {this.calculate()});
        }

        if (this.monthSelect) {
            this.monthSelect.addEventListener('change', () => {this.calculate()});
        }
    }
}

// вспомогательная функция для получения символа из события keypress
// (вдруг понадобится))
function getChar(event) {
    if (event.which === null) {
        if (event.keyCode < 32) return null;
        return String.fromCharCode(event.keyCode); // IE
    }

    if (event.which !== 0 && event.charCode !== 0) {
        if (event.which < 32) return null;
        return String.fromCharCode(event.which); // остальные
    }

    return null; // специальная клавиша
}


let form = document.querySelector('#calculator');
let info = document.querySelector('#diagram');

const selectors = {
    calculator: {
        money   : '.js-money-input',
        months  : '.js-months-select',
        capital : '.js-capitalization-input'
    },
    info: {
        moneyBefore : '#money-before',
        moneyAfter  : '#money-after',
        barBefore   : '#bar-before',
        barAfter    : '#bar-after',
    }
};

new DepositCalculator(form, info, selectors);