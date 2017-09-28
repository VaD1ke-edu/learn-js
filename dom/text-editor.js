// http://learn.javascript.ru/task/hotkeys
// Создайте <div>, который при нажатии Ctrl+E превращается в <textarea>.
// Изменения, внесенные в поле, можно сохранить обратно в <div> сочетанием клавиш Ctrl+S, при этом <div> получит в виде HTML содержимое <textarea>.
// Если же нажать Esc, то <textarea> снова превращается в <div>, изменения не сохраняются.

class TextEditor {
    constructor(textArea, textView) {
        this.textArea = textArea;
        this.textView = textView;
        this._initEvents();
    }


    _initEvents() {
        document.addEventListener('keydown', ev => {

            // esc
            if (ev.keyCode == 27) {
                ev.preventDefault();
                this._cancel();
                return;
            }

            if (ev.ctrlKey) {
                if (ev.keyCode == 'E'.charCodeAt(0)) {
                    ev.preventDefault();
                    this._edit();
                } else if (ev.keyCode == 'S'.charCodeAt(0)) {
                    ev.preventDefault();
                    this._save();
                }
            }
        });
    }

    _save() {
        this.textView.innerHTML = this.textArea.value;
        this.textView.style.display = 'block';
        this.textArea.style.display = 'none';
    }

    _edit() {
        this.textView.value = this.textArea.innerHTML;
        this.textArea.style.display = 'block';
        this.textView.style.display = 'none';
        this.textArea.focus();
    }

    _cancel() {
        this.textView.style.display = 'block';
        this.textArea.style.display = 'none';
    }
}

const area = document.querySelector('#area');
const view = document.querySelector('#view');
new TextEditor(area, view);