// http://learn.javascript.ru/task/tree-count
// Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. Узлы нижнего уровня, без детей – пропускайте.

class TreeCounter {
    /**
     * Initialize tree-counter for element
     *
     * @param {Element} tree - Tree element
     */
    constructor(tree) {
        this.tree = tree;
    }

    /**
     * Build tree in container for data
     */
    process() {
        let lis = elem.getElementsByTagName('li');
        for (let i = 0; i < lis.length; i++) {
            let li = lis[i];
            if (!li.firstChild) continue;

            let qty = this.getChildQty(li, 'LI', false);

            if (qty) {
                li.firstChild.data += `[${qty}]`;
            }
        }
    }

    /**
     * Get qty of children
     *
     * @param {Element} elem      - Element
     * @param {String}  tag       - Tag to count
     * @param {Boolean} countSelf - Should count elem
     *
     * @return int
     */
    getChildQty(elem, tag = 'LI', countSelf = true) {
        const children = elem.children;
        let qty = (elem.tagName === tag) && countSelf ? 1 : 0;

        if (!children.length) return qty;

        for (let i = 0; i < children.length; i++) {
            qty += this.getChildQty(children[i]);
        }
        return qty;
    }
}

let elem = document.querySelector('#tree');
let treeCounter = new TreeCounter(elem);
treeCounter.process();