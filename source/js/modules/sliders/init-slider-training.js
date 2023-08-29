const Swiper = global.Swiper;

const initTrainingSwiper = () => new Swiper('.training__swiper', {

  navigation: {
    nextEl: '.training-toggle-next',
    prevEl: '.training-toggle-prev',
  },

  breakpoints: {

    1200: {
      slidesPerView: 4,
      spaceBetween: 10,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },

    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});

export {initTrainingSwiper};
