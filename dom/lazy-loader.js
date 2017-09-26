// Реализуйте «красивый» (HTML) аналог alt при помощи CSS/JavaScript,
//     который затем будет заменён картинкой сразу же как только она загрузится.
//     А если загрузка не состоится – то не заменён.

class LazyLoader {
    constructor(className = 'lazy') {
        this.class = className;
        const containers = document.querySelectorAll('.' + this.class);
        for (let i = 0; i < containers.length; i++) {
            this._initContainer(containers[i]);
        }
    }


    _initContainer(container) {
        let img = document.createElement('img');
        img.src = container.getAttribute('data-src');
        img.className = this.class;
        img.onload = () => {
            this._replaceImg(img, container);
        };
    }

    _replaceImg(img, container) {
        container.parentNode.replaceChild(img, container);
    }
}

new LazyLoader('img-replace');