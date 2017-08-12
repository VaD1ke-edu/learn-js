// http://learn.javascript.ru/task/carousel
// Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

class Carousel {
    constructor(container, {slideQty = 4}) {
        this.$container    = container;
        this.$imageWrapper = this.$container.querySelector('ul');
        this.$imageItems   = this.$container.querySelectorAll('li');

        this.slideQty   = slideQty;
        this.imageWidth = this.$container.querySelector('img').width;
        this.position   = 0;

        this._initArrows();
    }

    _initArrows() {
        let leftArrow  = this.$container.querySelector('.js-carousel-prev');
        let rightArrow = this.$container.querySelector('.js-carousel-next');

        leftArrow.addEventListener('click', () => {
            this.position = Math.min(this.position + this.imageWidth * this.slideQty, 0);

            this._slideImages();
        });

        rightArrow.addEventListener('click', () => {
            const itemsQty = this.$imageItems.length;
            this.maxRightMove = this.maxRightMove || -this.imageWidth * (itemsQty - this.slideQty);

            const fullMove = this.position - this.imageWidth * this.slideQty;

            this.position = Math.max(fullMove, this.maxRightMove);

            this._slideImages();
        });
    }

    _slideImages() {
        this.$imageWrapper.style.marginLeft = `${this.position}px`;
    }
}

new Carousel(document.querySelector('#carousel'), {});