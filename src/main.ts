import * as angular from "angular";

import {appModule} from "./app.module";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./views/home/home.component";
import {PracticeComponent} from "./views/practice/practice.component";
import {NavbarComponent} from "./common/navbar/navbar.component";
import {ColorCallerComponent} from "./containers/colorCaller/colorCaller.component";
import {ColorListComponent} from "./components/colorList/colorList.component";
import {ListItemComponent} from "./components/listItem/listItem.component";


const components = [
    AppComponent,
    HomeComponent,
    PracticeComponent,
    NavbarComponent,
    ColorCallerComponent,
    ColorListComponent,
    ListItemComponent
];

// boostrapping
angular.bootstrap(document.querySelector("html"), [appModule.name]);
