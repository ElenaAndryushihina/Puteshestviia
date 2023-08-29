const Swiper = global.Swiper;

const initHeroSwiper = () => new Swiper('.hero__swiper', {

  pagination: {
    el: '.hero__pagination',
    clickable: true,
  },

  loop: true,
});

export {initHeroSwiper};
