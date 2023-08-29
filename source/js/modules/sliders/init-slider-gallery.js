const Swiper = global.Swiper;

const initGallerySwiper = () => new Swiper('.photo-gallery__swiper', {

  navigation: {
    nextEl: '.photo-gallery-toggle-next',
    prevEl: '.photo-gallery-toggle-prev',
  },

  slidesPerView: 'auto',

  breakpoints: {

    1200: {
      spaceBetween: 6,
    },

    768: {
      spaceBetween: 6,
    },

    320: {
      spaceBetween: 3,
    },
  },
});

export {initGallerySwiper};
