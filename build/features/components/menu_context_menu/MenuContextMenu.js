import { ContextMenu } from "../../../entities/components/context_menu/ContextMenu.js";
export class MenuContextMenu extends ContextMenu {
    menuButton;
    constructor(menuButton, contextData, closeCallback) {
        super(contextData, closeCallback, false);
        this.menuButton = menuButton;
        this.style.left = menuButton.offsetLeft + "px";
    }
    get menuButtonLabel() {
        return this.menuButton.label;
    }
}
customElements.define("el-menu-context-menu", MenuContextMenu);
//# sourceMappingURL=MenuContextMenu.js.map