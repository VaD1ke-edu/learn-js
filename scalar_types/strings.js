// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str,
// и если она превосходит maxlength – заменяет конец str на "...", так чтобы ее длина стала равна maxlength.

function truncate(text, maxLength) {
    maxLength = Math.max(0, parseInt(maxLength));
    text = String(text);

    return text.length > maxLength ? text.substring(0, maxLength - 1) + '…' : text;
}


// Напишите функцию checkSpam(str), которая возвращает true, если строка str содержит „viagra“ или „XXX“, а иначе false.

function checkSpam(value) {
    value = String(value);
    return !!value.match(/xxx|viagra/gi);
}


// Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом

function ucFirst(value) {
    if (value.length) {
        value = String(value);
        value = value.charAt(0).toUpperCase() + value.substr(1, value.length - 1);
    }

    return value;
}

