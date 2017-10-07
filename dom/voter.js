// http://learn.javascript.ru/task/clock
// http://learn.javascript.ru/task/voter-add-step

// http://learn.javascript.ru/task/clock

class Voter {
    constructor(options) {
        const defaults = {
            voteElemSelector : '.js-vote',
            downElemSelector : '.js-down',
            upElemSelector   : '.js-up',
        };
        options = Object.assign({}, defaults, options);

        this._elem     = options.elem;
        this._voteElem = this._elem.querySelector(options.voteElemSelector);

        this._vote = parseInt(this._voteElem.innerText);

        this._initEvents();
    }

    setVote(vote) {
        this._vote = +vote;
        this._voteElem.innerHTML = vote;
        this._elem.dispatchEvent(this._buildEvent('change', this._vote));
    }


    _initEvents() {
        this._elem.addEventListener('click', ev => {
            const target = ev.target;
            if (target.matches('.js-down') || target.closest('.js-down')) {
                this._voteDown(target.dataset.qty);
            } else if (target.matches('.js-up') || target.closest('.js-up')) {
                this._voteUp(target.dataset.qty);
            }
        });
    }

    _voteUp(qty = 1) {
        this._vote += +qty;
        this.setVote(this._vote);
    }

    _voteDown(qty = 1) {
        this._vote -= +qty;
        this.setVote(this._vote);
    }

    _buildEvent(type, detail) {
        return new CustomEvent(type, {
           bubbles: true,
           detail: detail
        });
    }
}

const voterElem = document.getElementById('voter');
const voter = new Voter({elem: voterElem});

voter.setVote(1);

voterElem.addEventListener('change', ev => {
    alert( ev.detail ); // новое значение голоса
});