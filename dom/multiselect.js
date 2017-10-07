// http://learn.javascript.ru/task/selectable-list

// http://learn.javascript.ru/task/selectable-list

class Multiselect {
    /**
     * Object constructor
     *
     * @param {object}  options      Options
     * @param {Element} options.elem Clock container
     */
    constructor(options) {
        if (!options.elem) {
            this._throwException('Multiselect element not defined');
        }

        this.elem = options.elem;

        this.selectedClass = 'selected';
        this._initEvents();
    }

    getSelected() {
        const selectedElems = this.elem.querySelectorAll('.' + this.selectedClass);
        let result = [];
        for (let i = 0; i < selectedElems.length; i++) {
            result.push(selectedElems[i].innerText);
        }
        return result;
    }


    _initEvents() {
        this.elem.addEventListener('mousedown', ev => ev.preventDefault());

        this.elem.addEventListener('click', ev => {
            const target = ev.target;
            let li = target.tagName === 'LI' ? target : target.closest('li');

            if (!li) return;

            if (ev.metaKey || ev.ctrlKey) {
                this._toggleSelect(li);
            } else if (ev.shiftKey) {
                this._selectToElem(li);
            } else {
                this._deselectAll();
                this._select(li);
            }

            this.lastClicked = li;
        });
    }

    _select(elem) {
        elem.classList.add(this.selectedClass);
    }

    _deselect(elem) {
        elem.classList.remove(this.selectedClass);
    }

    _toggleSelect(elem) {
        elem.classList.toggle(this.selectedClass);
    }

    _selectToElem(elem) {
        let startElem = this.lastClicked || this.elem.children[0];
        if (startElem === elem) return;

        var isGoingUp = startElem.compareDocumentPosition(elem) & 2;

        let curElem = startElem;

        this._select(curElem);
        do {
            curElem = isGoingUp ? curElem.previousElementSibling : curElem.nextElementSibling;
            this._select(curElem);
        } while (curElem !== elem);
    }

    _selectAll() {
        for (let i = 0; i < this.elem.children.length; i++) {
            this.elem.children[i].classList.add(this.selectedClass);
        }
    }

    _deselectAll() {
        for (let i = 0; i < this.elem.children.length; i++) {
            this._deselect(this.elem.children[i]);
        }
    }

    _throwException(message) {
        throw new ClockException(message);
    }
}

const MultiselectException = function (message) {
    this.message = message;
};

const multiselect = new Multiselect({elem: document.querySelector('#list')});
