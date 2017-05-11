import {appModule} from "../../app.module";
import './colorCaller.component.scss';

interface colorSchema {
  English: string;
  Transliteration: string;
  Hebrew: string;
  Photo: string;
  Start: number,
  Duration: number;
}

export class ColorCallerComponent {
  ColorService: any;
  colorArray: colorSchema [];

  constructor(ColorService) {

    // This will keep the service instance across our class
    this.ColorService = ColorService;

    // Initialize empty array to hold my colors
    this.colorArray = [];
  }

  // Initialized every route change
  $onInit() {
    this.ColorService.getColors().then((response) => {
      this.colorArray = response.data;
      console.log(this.colorArray);
    });
    console.log('hi from color caller');
  }
}

// Component Declaration
appModule.component("colorCaller", {
  controller: ColorCallerComponent,
  template: require("./colorCaller.component.html")
});
