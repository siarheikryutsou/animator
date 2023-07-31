import { ElementBase } from "../../../shared/ElementBase.js";
import { Container } from "../../../shared/components/container/Container.js";
import { PanelHeader } from "./PanelHeader.js";
export class Panel extends ElementBase {
    constructor(...tabNames) {
        super();
        this.panelsContainer = new Container();
        this.panelsContainer.classList.add("panels-container");
        this.classList.add("panel");
        this.panelHeader = new PanelHeader(...tabNames);
        this.append(this.panelHeader, this.panelsContainer);
    }
}
//# sourceMappingURL=Panel.js.map