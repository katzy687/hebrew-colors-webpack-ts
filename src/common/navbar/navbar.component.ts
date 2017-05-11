import {appModule} from "../../app.module";
import './navbar.component.scss';

export class NavbarComponent {
    constructor() {
    }
}

appModule.component("navbar", {
    controller: NavbarComponent,
    template: require("./navbar.component.html")
});
