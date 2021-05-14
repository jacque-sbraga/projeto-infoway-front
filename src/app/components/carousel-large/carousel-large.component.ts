import { Component, ViewChild } from '@angular/core';

import {
  NgbCarousel,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel-large',
  templateUrl: './carousel-large.component.html',
  // styleUrls: ['./carousel-large.component.css'],
})
export class CarouselLargeComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  // images = [62, 83, 466, 965, 982, 1043, 738].map(
  //   (n) => `https://picsum.photos/id/${n}/900/500`
  // );

  // paused = false;
  // unpauseOnArrow = false;
  // pauseOnIndicator = false;
  // pauseOnHover = true;
  // pauseOnFocus = true;

  // @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

  // togglePaused() {
  //   if (this.paused) {
  //     this.carousel.cycle();
  //   } else {
  //     this.carousel.pause();
  //   }
  //   this.paused = !this.paused;
  // }

  // onSlide(slideEvent: NgbSlideEvent) {
  //   if (
  //     this.unpauseOnArrow &&
  //     slideEvent.paused &&
  //     (slideEvent.source === NgbSlideEventSource.ARROW_LEFT ||
  //       slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
  //   ) {
  //     this.togglePaused();
  //   }
  //   if (
  //     this.pauseOnIndicator &&
  //     !slideEvent.paused &&
  //     slideEvent.source === NgbSlideEventSource.INDICATOR
  //   ) {
  //     this.togglePaused();
  //   }
  // }
}
