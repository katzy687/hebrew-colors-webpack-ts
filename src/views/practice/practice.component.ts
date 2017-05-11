import uiRouter from 'angular-ui-router';
import {appModule} from "../../app.module";
import './practice.component.scss';

export class PracticeComponent {
    constructor() {
    }
}

appModule.component('practice', {
    controller: PracticeComponent,
    template: require('./practice.component.html')
}).name;
