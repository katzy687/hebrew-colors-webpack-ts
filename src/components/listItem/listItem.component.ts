import {appModule} from "../../app.module";
import './listItem.component.scss';

export class ListItemComponent {

  playClip: any;
  class: string;
  showHebrew: any;
  hideHebrew: any;

  constructor() {

    ////=====================Audio===========================

    this.playClip = function() {
      console.log('yo');
      var startTime = this.Start;
      var endTime = 15;

      // Get our audio (could also get an audio element from the DOM)
      var audio = new Audio('./assets/names_of_colors.mp3');

      // Must start before we can set the time
      audio.play();

      audio.currentTime = this.color.Start;
      let duration = this.color.Duration;
      console.log(duration);

      audio.addEventListener("canplaythrough", function() {
        setTimeout(function() {
          audio.pause();
        },
          duration);
      }, false);
    }

    ////=====================tooltip===========================

    this.class = "hidden-hebrew";

    this.showHebrew = function() {
      this.class = "";
    }

    this.hideHebrew = function() {
      this.class = "hidden-hebrew";
    }

  }
}

// color caller container is passing in array
appModule.component("listItem", {
  controller: ListItemComponent,
  template: require("./listItem.component.html"),
  bindings: { color: '<' }
});
