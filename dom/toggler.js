// написать компонент, который по нажатию будет скрывать кнопку и убирать ивент с нее

class Toggler {
    constructor(buttonElem) {
        if (!buttonElem) {
            return;
        }

        buttonElem.addEventListener('click', function hide() {
            buttonElem.hidden = true;

            buttonElem.removeEventListener('click', hide);
        })
    }
}

new Toggler(document.querySelector('#togglerBtn'));