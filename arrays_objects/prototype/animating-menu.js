// http://learn.javascript.ru/task/menu-timer-animated

"use strict";

function Menu(state = Menu.STATE_CLOSED) {
    this._state = state;
}

Menu.STATE_OPEN = 1;
Menu.STATE_CLOSED = 0;

Menu.prototype.open = function() {
    this._state = Menu.STATE_OPEN;
    return this;
};

Menu.prototype.close = function() {
    this._state = Menu.STATE_CLOSED;
    return this;
};

Menu.prototype._stateAsString = function() {
    switch (this._state) {
        case Menu.STATE_OPEN:
            return 'открыто';

        case Menu.STATE_CLOSED:
            return 'закрыто';
    }
};

Menu.prototype.showState = function() {
    alert(this._stateAsString());
};


function AnimatingMenu() {
    Menu.apply(this, arguments);

    this._openMenu  = Menu.prototype.open.bind(this);
    this._closeMenu = Menu.prototype.close.bind(this);
    this._timer = null;
}

AnimatingMenu.prototype = Object.create(Menu.prototype);

AnimatingMenu.STATE_ANIMATING = 2;

AnimatingMenu.prototype._stateAsString = function() {
    return this._state === AnimatingMenu.STATE_ANIMATING ? 'анимация' : Menu.prototype._stateAsString.call(this);
};

AnimatingMenu.prototype.open = function() {
    this._state = AnimatingMenu.STATE_ANIMATING;console.log(this._openMenu);
    this._timer = setTimeout(this._openMenu, 1000);
    return this;
};

AnimatingMenu.prototype.close = function() {
    clearTimeout(this._timer);
    console.log(this._closeMenu);
    this._closeMenu();
    return this;
};

// использование..

let menu = new AnimatingMenu();

menu.showState(); // закрыто

menu.open();
menu.showState(); // анимация

setTimeout(function() {
    menu.showState(); // открыто

    menu.close();
    menu.showState(); // закрыто (закрытие без анимации)
}, 1000);