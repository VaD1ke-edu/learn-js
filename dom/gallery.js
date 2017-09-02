// http://learn.javascript.ru/task/image-gallery
// Создайте галерею изображений, в которой основное изображение изменяется при клике на уменьшенный вариант.
//
class Gallery {
    constructor({container, mainImageId, thumbnailsId, shouldPreload = true}) {
        this.container  = container;
        this.mainImage  = this.container.querySelector('#' + mainImageId);
        this.thumbnails = this.container.querySelector('#' + thumbnailsId);

        this._initEvents();
        if (shouldPreload) {
            this._preloadImages();
        }
    }


    _initEvents() {
        this.thumbnails.addEventListener('click', ev => {
            let target = ev.target;
            let $this  = ev.currentTarget;

            while (target != $this) {
                if (target.tagName !== 'A') {
                    target = target.parentNode;
                    continue;
                }

                this._changeMainImage(target.href, target.title);
                ev.preventDefault();
                break;
            }
        });
    }

    async _preloadImages() {
        let links = this.thumbnails.querySelectorAll('a');

        for (let i = 0; i < links.length; i++) {
            let img = new Image();
            img.src = links[i].href;
        }
    }

    _changeMainImage(src, alt) {
        this.mainImage.src = src;
        this.mainImage.alt = alt;
    }
}

new Gallery({
    container: document.body,
    mainImageId: 'largeImg',
    thumbnailsId: 'thumbs'
});
