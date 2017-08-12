// http://learn.javascript.ru/task/create-notification
// Напишите функцию showNotification(options), которая показывает уведомление, пропадающее через 1.5 сек.

class Notification {
    /**
     * Инициализация контейнера
     *
     * @param container {Element} - Контейнер нотификации
     */
    constructor(container = document.body) {
        this.container = container;
    }

    /**
     * Показывает уведомление, пропадающее через 1.5 сек
     *
     * @param options.top {number} вертикальный отступ, в px
     * @param options.right {number} правый отступ, в px
     * @param options.cssText {string} строка стиля
     * @param options.className {string} CSS-класс
     * @param options.html {string} HTML-текст для показа
     */
    show({top = 0, right = 0, cssText, className, html, timeout = 1500}) {
        let notification = document.createElement('div');

        if (cssText) {
            notification.style.cssText = cssText;
        }

        notification.style.top   = `${top}px`;
        notification.style.right = `${right}px`;

        notification.className = "notification";
        if (className) {
            notification.classList.add(className);
        }

        notification.innerHTML = html;

        this.container.appendChild(notification);

        setTimeout(() => {
            this.container.removeChild(notification);
        }, timeout);
    }
}

let i = 0;
let notification = new Notification();

setInterval(function() {
    notification.show({
        top: 10,
        right: 10,
        html: 'Привет ' + ++i,
        className: 'welcome'
    });
}, 2000);