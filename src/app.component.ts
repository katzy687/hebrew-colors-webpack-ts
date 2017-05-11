import {appModule} from "./app.module";
const template = require('./app.component.html');
import './app.component.scss';

export class AppComponent {
    constructor() {
    }
}

appModule.component("app", {
    controller: AppComponent,
    template: template
});
