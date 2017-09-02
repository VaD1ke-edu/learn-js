// http://learn.javascript.ru/behavior

class Tooltip {
    init() {
        this._openTooltipListener  = this._openTooltipListener.bind(this);
        this._closeTooltipListener = this._closeTooltipListener.bind(this);

        document.addEventListener('mouseover', this._openTooltipListener);
        document.addEventListener('mouseout', this._closeTooltipListener);
    }

    destroy() {
        document.removeEventListener('mouseover', this._openTooltipListener);
        document.removeEventListener('mouseout', this._closeTooltipListener);
        this._removeTip();
    }


    _openTooltipListener(ev) {
        let target = ev.target;

        const tipText = this._getTooltipText(target);
        if (!tipText) return;

        let tip = document.createElement('div');
        tip.innerHTML = tipText;
        tip.classList.add('tooltip');

        document.body.appendChild(tip);

        const tipCoors = this._getTooltipCoordinates(target, tip);

        tip.style.left = tipCoors.left + 'px';
        tip.style.top  = tipCoors.top + 'px';

        this.curTip = tip;
    }

    _closeTooltipListener(ev) {
        if (this._getTooltipText(ev.target)) {
            this._removeTip();
        }
    }

    _removeTip() {
        document.body.removeChild(this.curTip);
        this.curTip = null;
    }

    _getTooltipText(elem) {
        return elem.getAttribute('data-tooltip');
    }

    _getTooltipCoordinates(target, tip) {
        const targetBounds = target.getBoundingClientRect();

        let left = targetBounds.left + (target.offsetWidth - tip.offsetWidth) / 2;
        left = Math.max(left, 0)

        let top = targetBounds.top - tip.offsetHeight - 3;
        top = top >= 0 ? top : coords.top + target.offsetHeight;

        return {left: left, top: top};
    }
}

const tooltip = new Tooltip();
tooltip.init();
setTimeout(() => {tooltip.destroy()}, 5000)