// Создайте функцию addScripts(scripts, callback), которая загружает скрипты из массива scripts,
// и после загрузки и выполнения их всех вызывает функцию callback.

class ScriptLoader {
    constructor(scripts = []) {
        this.scripts = scripts;
        this.loaded = [];
        this.counter = 0;
    }

    load(cb) {
        for (let i = 0; i < this.scripts.length; i++) {
            let script = document.createElement('script');
            script.src = this.scripts[i];
            document.body.appendChild(script);

            script.onload = () => {
                if (!this.loaded[i]) {
                    this.loaded[i] = true;
                    const allLoaded = ++this.counter == this.scripts.length
                    if (allLoaded) cb();
                }
            };
        }
    }
}

let loader = new ScriptLoader(["a.js", "b.js", "c.js"]);
loader.load(() => { a() });