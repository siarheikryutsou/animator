import { ElementBase } from "../../../shared/ElementBase.js";
import { ContextMenu } from "../../../entities/components/context_menu/ContextMenu.js";
import { EventListener } from "../../../shared/utils/EventListener.js";
import { ListElementWithRenameLabel } from "../list_element_with_rename_label/ListElementWithRenameLabel.js";
export class ElementWithContext extends ElementBase {
    menuContent;
    _contextMenu;
    constructor(menuContent) {
        super();
        this.menuContent = menuContent;
        if (!(this instanceof ListElementWithRenameLabel)) {
            this.listenEvents(new EventListener(this, "contextmenu" /* Events.CONTEXT_MENU */, (event) => this.onRightClick(event)));
        }
    }
    onRightClick(event) {
        event.preventDefault();
        this.closeContext();
        this._contextMenu = new ContextMenu(this.menuContent, () => this.closeContext());
        this.setContextMenuPosition(event.pageX, event.pageY);
        document.body.append(this._contextMenu);
    }
    setContextMenuPosition(x, y) {
        this._contextMenu?.setOffset(x, y);
    }
    closeContext() {
        this.contextMenu?.remove();
        this._contextMenu = undefined;
    }
    get contextMenu() {
        return this._contextMenu;
    }
}
//# sourceMappingURL=ElementWithContext.js.map