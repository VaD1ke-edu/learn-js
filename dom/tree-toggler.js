// http://learn.javascript.ru/event-delegation
// Создайте дерево, которое по клику на заголовок скрывает-показывает детей
// Требования:
//   Использовать делегирование.
//   Клик вне текста заголовка (на пустом месте) ничего делать не должен.
//   При наведении на заголовок – он становится жирным, реализовать через CSS.

class TreeToggler {
    /**
     * Initialize tree-toggler for element
     *
     * @param {Element} tree - Tree element
     */
    constructor(tree) {
        this.tree = tree;
        this.initToggle();
    }

    initToggle() {
        this.tree.addEventListener('click', ev => {
            const target = ev.target;

            if (target.tagName === 'LI') return;

            const li = target.closest('li');

            if (li) {
                this._toggleLi(li);
            }
        });
    }


    _toggleLi(li) {
        const ul = li.querySelector('ul');
        if (ul) {
            this._toggleElem(ul);
        }
    }

    _toggleElem(elem) {
        elem.hidden = !elem.hidden;
    }
}

new TreeToggler(document.querySelector('.tree'));