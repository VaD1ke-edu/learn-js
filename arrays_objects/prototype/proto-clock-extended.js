// http://learn.javascript.ru/task/clock-class

"use strict";

function extend(Child, Parent) {
    Child.prototype = inherit(Parent.prototype);
    Child.prototype.constructor = Child;
    Child.parent = Parent.prototype;
}

function inherit(proto) {
    function F() {}
    F.prototype = proto;
    return new F;
}

function Clock(options) {
    this._template = options.template;
}

Clock.prototype._render = function render() {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var min = date.getMinutes();
    if (min < 10) min = '0' + min;

    var sec = date.getSeconds();
    if (sec < 10) sec = '0' + sec;

    var output = this._template.replace('h', hours).replace('m', min).replace('s', sec);

    console.log(output);
};

Clock.prototype.stop = function() {
    clearInterval(this._timer);
};

Clock.prototype.start = function() {
    this._render();
    var self = this;
    this._timer = setInterval(function() {
        self._render();
    }, 1000);
};


function ExtendedClock(options = {template: 'h:m:s', precision: 10000}) {
    Clock.apply(this, arguments);
    this._precision = options.precision;
}

extend(ExtendedClock, Clock);

ExtendedClock.prototype.start = function () {
    this._render();
    this._timer = setInterval(() => { this._render() }, this._precision);
};


//  Надо: часы, которые тикают раз в 10 секунд (точность 10000)
const lowResolutionClock = new ExtendedClock({
    template: 'h:m:s',
    precision: 10000
});

lowResolutionClock.start();
