// http://learn.javascript.ru/task/clock-class

"use strict";
function Clock(options) {
    this._template = options.template;
    this._timer    = null;
}

Clock.prototype._render = function () {
    let date  = new Date();
    let hours = date.getHours();
    let min   = date.getMinutes();
    let sec   = date.getSeconds();

    if (hours < 10) {
        hours = '0' + hours;
    }
    if (min < 10) {
        min = '0' + min;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }

    const output = this._template.replace('h', hours).replace('m', min).replace('s', sec);
    console.log(output);
};

Clock.prototype.stop = function () {
    if (this._timer) {
        clearInterval(this._timer);
    }
};

Clock.prototype.start = function () {
    this._render();
    this._timer = setInterval(() => { this._render() }, 1000);
};

const clock = new Clock({
    template: 'h:m:s'
});
clock.start();
