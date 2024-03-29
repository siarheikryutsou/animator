import { ElementBase } from "../../../shared/ElementBase.js";
import { ContextMenuButton } from "../context_menu_button/ContextMenuButton.js";
import { EventListener } from "../../../shared/utils/EventListener.js";
export class ContextMenu extends ElementBase {
    closeCallback;
    constructor(contextData, closeCallback, listenClickOutside = true) {
        super();
        this.closeCallback = closeCallback;
        this.classList.add("context-menu");
        Object.keys(contextData).forEach((el) => {
            this.append(new ContextMenuButton(el, contextData[el]));
        });
        this.listenEvents(new EventListener(window, "blur" /* Events.BLUR */, (event) => this.closeCallback?.()), new EventListener(this, "click" /* Events.CLICK */, (event) => this.onContextMenuClick(event)));
        if (listenClickOutside) {
            this.listenEvents(new EventListener(window, "mousedown" /* Events.MOUSE_DOWN */, (event) => this.onWindowMouseDown(event)));
        }
    }
    onWindowMouseDown(event) {
        const target = event.target;
        if (!(target instanceof ContextMenuButton)) {
            this.closeCallback?.();
        }
    }
    setOffset(x, y) {
        this.style.top = `${y}px`;
        this.style.left = `${x}px`;
    }
    connectedCallback() {
        super.connectedCallback();
        const rect = this.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const x = parseInt(this.style.left);
        const y = parseInt(this.style.top);
        if (rect.right > windowWidth) {
            this.style.left = `${Math.round(x - rect.width)}px`;
        }
        if (rect.bottom > windowHeight) {
            this.style.top = `${y - (rect.bottom - windowHeight)}px`;
        }
    }
    onContextMenuClick(event) {
        if (event.target instanceof ContextMenuButton) {
            event.stopPropagation();
            this.closeCallback?.();
        }
    }
}
customElements.define("el-context-menu", ContextMenu);
//# sourceMappingURL=ContextMenu.js.map