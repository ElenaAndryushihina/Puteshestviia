import Swiper from '../../vendor/swiper';

const initGallerySwiper = () => new Swiper('.photo-gallery__swiper', {

  navigation: {
    nextEl: '.photo-gallery-toggle-next',
    prevEl: '.photo-gallery-toggle-prev',
  },

  slidesPerView: 'auto',

  breakpoints: {

    1200: {
      allowTouchMove: false,
      spaceBetween: 6,
    },

    768: {
      allowTouchMove: true,
      spaceBetween: 6,
    },

    320: {
      allowTouchMove: true,
      spaceBetween: 3,
    },
  },
});

export {initGallerySwiper};
