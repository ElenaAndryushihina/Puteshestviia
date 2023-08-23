const Swiper = global.Swiper;

const initHeroSwiper = () => new Swiper('.hero__swiper', {

  pagination: {
    el: '.hero__pagination',
    clickable: true,
  },

  loop: true,

  breakpoints: {

    1200: {
      allowTouchMove: false,
    },

    768: {
      allowTouchMove: true,
    },

    320: {
      allowTouchMove: true,
    },
  },
});

export {initHeroSwiper};
