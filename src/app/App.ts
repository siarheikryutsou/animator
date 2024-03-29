import {WorkspaceScreen} from "../pages/workspace/WorkspaceScreen.js";
import {Events} from "../shared/lib/Events";

export class App {
    constructor() {
        const workspaceScreen:WorkspaceScreen = new WorkspaceScreen();
        document.body.append(workspaceScreen);
    }
}

window.addEventListener(Events.LOAD, (event:Event) => {
    new App();
});