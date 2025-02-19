// import { Injectable } from '@angular/core';
// import * as AOS from 'aos';
// import GLightbox from 'glightbox';
// import Isotope from 'isotope-layout';
// import Swiper from 'swiper';

// @Injectable({
//   providedIn: 'root',
// })
// export class UtilsService {
//   constructor() {}

//   initAOS() {
//     AOS.init({
//       duration: 600,
//       easing: 'ease-in-out',
//       once: true,
//       mirror: false,
//     });
//   }

//   initGLightbox() {
//     GLightbox({
//       selector: '.glightbox',
//     });
//   }

//   initIsotope(container: string) {
//     const isotopeItem = document.querySelector(container);
//     if (!isotopeItem) return;

//     const layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
//     const filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
//     const sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

//     let initIsotope: Isotope;
//     imagesLoaded(isotopeItem.querySelector('.isotope-container'), () => {
//       initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
//         itemSelector: '.isotope-item',
//         layoutMode: layout,
//         filter: filter,
//         sortBy: sort,
//       });
//     });

//     isotopeItem.querySelectorAll('.isotope-filters li').forEach((filters) => {
//       filters.addEventListener('click', () => {
//         isotopeItem.querySelector('.isotope-filters .filter-active')?.classList.remove('filter-active');
//         filters.classList.add('filter-active');
//         initIsotope.arrange({
//           filter: filters.getAttribute('data-filter'),
//         });
//         this.initAOS();
//       });
//     });
//   }

//   initSwiper() {
//     document.querySelectorAll('.init-swiper').forEach((swiperElement) => {
//       const config = JSON.parse(swiperElement.querySelector('.swiper-config')?.innerHTML.trim() || '{}');
//       if (swiperElement.classList.contains('swiper-tab')) {
//         this.initSwiperWithCustomPagination(swiperElement, config);
//       } else {
//         new Swiper(swiperElement, config);
//       }
//     });
//   }

//   private initSwiperWithCustomPagination(element: Element, config: any) {
//     // Custom logic for swiper with pagination
//   }
// }