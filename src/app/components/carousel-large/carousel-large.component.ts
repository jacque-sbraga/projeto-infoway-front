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
  images = [
    "https://www.fastshop.com.br/wcsstore/FastShop/img/home/2021/05/10/intpro-_-100521-_-01-_-super-oportunidades-_-ND-_-ND-_-Grupo-_-rotativohome.jpg",
    "https://www.fastshop.com.br/wcsstore/FastShop/img/home/2021/05/10/intpro-_-100521-_-02-_-FastPrime-_-ND-_-ND-_-ND-_-rotativohome.jpg",
    "https://www.fastshop.com.br/wcsstore/FastShop/img/home/2021/05/10/intpro-_-100521-_-99-_-6869252683-_-Acer-_-IN-_-Grupo-_-rotativohome.jpg",
    "https://www.fastshop.com.br/wcsstore/FastShop/img/home/2021/05/10/intpro-_-100521-_-05-_-SGQN55LS03TA_PRD-_-Samsung-_-VD-_-Grupo-_-rotativohome.jpg",
    "https://www.fastshop.com.br/wcsstore/FastShop/img/home/2021/05/10/intpro-_-110521-_-06-_-ND-_-ND-_-CL-_-Grupo-_-rotativohome.jpg"
  ]

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
