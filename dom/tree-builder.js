// http://learn.javascript.ru/task/create-object-tree
// Напишите функцию, которая создаёт вложенный список UL/LI (дерево) из объекта.

const data = {
    "Рыбы": {
        "Форель": {},
        "Щука": {}
    },

    "Деревья": {
        "Хвойные": {
            "Лиственница": {},
            "Ель": {}
        },
        "Цветковые": {
            "Берёза": {},
            "Тополь": {}
        }
    }
};


class TreeBuilder {
    /**
     * Initialize tree-builder for container
     *
     * @param {Element} container - Tree container
     */
    constructor(container) {
        this.container = container;
    }

    /**
     * Build tree in container for data
     *
     * @param {Object} data - Object for tree
     * @return Element|null
     */
    build(data) {
        function getList(obj) {
            if (!Object.keys(obj).length) return null;

            let ul = document.createElement('ul');

            for (let key in obj) {
                let li = document.createElement('li');
                li.innerHTML = key;

                if (!obj.hasOwnProperty(key)) continue;

                let insideUl = getList(obj[key]);
                if (insideUl) {
                    li.appendChild(insideUl);
                }

                ul.appendChild(li);
            }

            return ul;
        }


        this.container.innerHtml = '';
        let ul = getList(data);
        if (ul) {
            this.container.appendChild(ul);
        }
    }
}

let elem = document.querySelector('#tree');
let treeBuilder = new TreeBuilder(elem);
treeBuilder.build(data);