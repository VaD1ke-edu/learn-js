// http://learn.javascript.ru/task/move-ball-field
// Сделайте так, что при клике по полю мяч перемещался на место клика.

class BallLocator {
    constructor(fieldElem, ballSelector = '#ball') {
        this.$field = fieldElem;
        this.$ball  = this.$field.querySelector(ballSelector);

        this._initBallSize()._initClick();
    }

    _initBallSize() {
        this.ballHeight = this.$ball.clientHeight;
        this.ballWidth  = this.$ball.clientWidth;
        return this;
    }

    _initClick() {
        this.$field.addEventListener('click', ev => {
            const $field = this.$field;
            const fieldCoords = ev.currentTarget.getBoundingClientRect();
            const fieldInnerCoords = {
                top: fieldCoords.top + $field.clientTop,
                left: fieldCoords.left + $field.clientLeft
            };

            this.ballCoords = {
                top:  event.clientY - fieldInnerCoords.top - this.ballHeight / 2,
                left: event.clientX - fieldInnerCoords.left - this.ballWidth / 2
            };

            if (this.ballCoords.top < 0) this.ballCoords.top = 0;
            if (this.ballCoords.left < 0) this.ballCoords.left = 0;
            if (this.ballCoords.left + this.ballWidth > this.$field.clientWidth) {
                this.ballCoords.left = $field.clientWidth - this.ballWidth;
            }
            if (this.ballCoords.top + this.ballHeight > this.$field.clientHeight) {
                this.ballCoords.top = $field.clientHeight - this.ballHeight;
            }

            this._moveBall();
        });
        return this;
    }

    _moveBall() {
        this.$ball.style.left = `${this.ballCoords.left}px`;
        this.$ball.style.top = `${this.ballCoords.top}px`;
        return this;
    }
}

let field = document.querySelector('#field');
new BallLocator(field);