// http://learn.javascript.ru/task/add-select-option

class SelectHandler {
    constructor(select) {
        this.select = select;
    }

    getValues() {
        let values = {};

        if (!this._hasValue()) {
            return values;
        }

        if (!this._isMultiple()) {
            const selectedOption = this.select.options[this.select.selectedIndex];
            values[selectedOption.value] = selectedOption.text;
            return values;
        }

        const options = select.options;
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                values[options[i].value] = options[i].text;
            }
        }

        return values;
    }

    appendOption({value, text, selected = false}) {
        let option = new Option(value, text);

        if (!selected) {
            this.select.appendChild(option);
            return;
        }

        option.selected = true;
        if (!this._isMultiple()) {
            const options = select.options;
            for (let i = 0; i < options.length; i++) {
                options[i].selected = false;
            }
        }

        this.select.appendChild(option);
    }


    _isMultiple() {
        return this.select.multiple;
    }

    _hasValue() {
        return ~this.select.selectedIndex;
    }
}

let select = document.querySelector('#genreSelect');
const selectHandler = new SelectHandler(select);
selectHandler.appendOption({value:'Classic', text: 'Классика', selected: true});
setTimeout(() => {console.log(selectHandler.getValues())}, 2000);

