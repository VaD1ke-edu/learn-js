// http://learn.javascript.ru/task/clock

class Clock {
    /**
     * Object constructor
     *
     * @param {object}  options      Options
     * @param {Element} options.elem Clock container
     */
    constructor(options = {}) {
        if (!options.elem) {
            this._throwException('Clock container not defined');
        }

        this.elem = options.elem;

        this.secClass  = 'sec';
        this.minClass  = 'min';
        this.hourClass = 'hour';
    }

    start() {
        this.timer = setInterval(() => this.render(), 1000);
    }

    stop() {
        clearInterval(this.timer);
    }

    render() {
        const curDate = new Date();

        this.elem.innerHTML = '';
        this.elem.appendChild(this._buildDatePart(curDate.getHours(), this.hourClass));
        this.elem.appendChild(this._buildDatePart(curDate.getMinutes(), this.minClass));
        this.elem.appendChild(this._buildDatePart(curDate.getSeconds(), this.secClass));
    }


    _buildDatePart(value, className) {
        let partElem = document.createElement('span');
        partElem.className = className;
        partElem.innerHTML = this._prepareDatePartString(value);
        return partElem;
    }

    _prepareDatePartString(dateValue) {
        return dateValue < 10 ? '0' + dateValue : dateValue;
    }

    _throwException(message) {
        throw new ClockException(message);
    }
}

const ClockException = function (message) {
    this.message = message;
};


