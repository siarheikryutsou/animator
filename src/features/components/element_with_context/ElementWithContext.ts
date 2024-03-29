import {ElementBase} from "../../../shared/ElementBase.js";
import {IMenuContextItem} from "../../../shared/interfaces/IMenuContentData";
import {ContextMenu} from "../../../entities/components/context_menu/ContextMenu.js";
import {EventListener} from "../../../shared/utils/EventListener.js";
import {Events} from "../../../shared/lib/Events";
import {ListElementWithRenameLabel} from "../list_element_with_rename_label/ListElementWithRenameLabel.js";

export class ElementWithContext extends ElementBase {

    protected readonly menuContent:IMenuContextItem;
    protected _contextMenu: ContextMenu | undefined;
    constructor(menuContent: IMenuContextItem) {
        super();
        this.menuContent = menuContent;

        if(!(this instanceof ListElementWithRenameLabel)) {
            this.listenEvents(
                new EventListener(this, Events.CONTEXT_MENU, (event: Event) => this.onRightClick(event as MouseEvent))
            );
        }
    }

    protected onRightClick(event: MouseEvent): void {
        event.preventDefault();
        this.closeContext();
        this._contextMenu = new ContextMenu(this.menuContent, () => this.closeContext());
        this.setContextMenuPosition(event.pageX, event.pageY);
        document.body.append(this._contextMenu);
    }


    private setContextMenuPosition(x: number, y: number): void {
        this._contextMenu?.setOffset(x, y);
    }


    protected closeContext(): void {
        this.contextMenu?.remove();
        this._contextMenu = undefined;
    }


    get contextMenu(): ContextMenu | undefined {
        return this._contextMenu;
    }
}