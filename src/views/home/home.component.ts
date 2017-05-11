import uiRouter from 'angular-ui-router';
import {appModule} from "../../app.module";
import './home.component.scss';

export class HomeComponent {
    constructor() {
    }
}

appModule.component('home', {
    controller: HomeComponent,
    template: require('./home.component.html')
}).name;
