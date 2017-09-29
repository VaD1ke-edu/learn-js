// http://learn.javascript.ru/task/edit-td-click
// Сделать ячейки таблицы td редактируемыми по клику.

class TableEditor {
    constructor(table) {
        this.table       = table;
        this.curCellData = {};

        this.textAreaClass = 'ui-text-area';
        this.editCellClass = 'ui-editing-cell';

        this._initEvents();
    }


    _initEvents() {
        this.table.addEventListener('click', ev => {
            let target    = ev.target;
            let curTarget = ev.currentTarget;

            while (target != curTarget) {
                console.log(target);
                if (target.className === 'js-edit-submit') {
                    this._submitEditingCell();
                    break;
                }

                if (target.className === 'js-edit-cancel') {
                    this._cancelEditingCell();
                    break;
                }

                if (this.curCellData.cell) {
                    break;
                }

                if (target.tagName !== 'TD') {
                    target = target.parentNode;
                    continue;
                }

                this._editCell(target);
                break;
            }
        });
    }

    _editCell(cell) {
        let textArea = document.createElement('textarea');
        textArea.style.width = cell.clientWidth + 'px';
        textArea.style.height = cell.clientHeight + 'px';
        textArea.className = this.textAreaClass;
        textArea.value = cell.innerHTML;

        this.curCellData.html = cell.innerHTML;
        this.curCellData.cell = cell;

        cell.innerHTML = '';
        cell.classList.add(this.editCellClass);
        cell.append(textArea);
        textArea.focus();

        let btns = document.createElement('div');
        btns.className = 'ui-edit-btns';
        btns.innerHTML = '<button class="js-edit-submit">OK</button><button class="js-edit-cancel">CANCEL</button>';
        cell.append(btns);
    }

    _submitEditingCell() {
        let cell     = this.curCellData.cell;
        let textArea = cell.querySelector('.' + this.textAreaClass);

        cell.innerHTML = textArea.value;
        cell.classList.remove(this.editCellClass);
        this.curCellData = {};
    }

    _cancelEditingCell() {
        let cell = this.curCellData.cell;
        cell.innerHTML = this.curCellData.html;
        cell.classList.remove(this.editCellClass);
        this.curCellData = {};
    }
}

let table = document.getElementById('bagua-table');
new TableEditor(table);
