import { Button } from "../../../shared/components/button/Button.js";
export class MenuButton extends Button {
    constructor(label) {
        super(label);
        this.classList.add("menu-button");
    }
}
customElements.define("el-menu-button", MenuButton);
//# sourceMappingURL=MenuButton.js.map