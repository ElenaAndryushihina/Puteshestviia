import Swiper from '../../vendor/swiper';

const initGallerySwiper = () => new Swiper('.photo-gallery__swiper', {

  navigation: {
    nextEl: '.photo-gallery-toggle-next',
    prevEl: '.photo-gallery-toggle-prev',
  },

  breakpoints: {

    1200: {
      slidesPerView: 'auto',
      spaceBetween: 6,
      // grid: {
      //   rows: 2,
      //   columns: 7,
      // },
      // initialSlide: 0,
    },

    768: {
      // slidesPerView: 2,
      // spaceBetween: 30,
      // initialSlide: 2,
    },

    320: {
      // slidesPerView: 1,
      // initialSlide: 2,
    },
  },
});

export {initGallerySwiper};
