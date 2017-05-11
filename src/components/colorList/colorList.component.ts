import {appModule} from "../../app.module";
import './colorList.component.scss';

export class ColorListComponent {
  numRecords: number;
  page: number;
  next: any;
  back: any;

  constructor() {
    this.numRecords = 5;
    this.page = 1;

    this.next = function(){
      if (this.page === 3) {
        return;
      } else {
        this.page = this.page + 1;
      }
    };

    this.back = function(){
      if (this.page === 1) {
        return;
      } else {
        this.page = this.page - 1;
      }
    };
  }

  $onInit(){
  }
}

// color caller container is passing in array
appModule.component("colorList", {
  controller: ColorListComponent,
  template: require("./colorList.component.html"),
  bindings: { colors: '<' }
});
