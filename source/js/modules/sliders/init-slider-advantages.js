import Swiper from '../../vendor/swiper';

const initAdvantagesSwiper = () => new Swiper('.advantages__swiper', {

  navigation: {
    nextEl: '.advantages-toggle-next',
    prevEl: '.advantages-toggle-prev',
  },

  breakpoints: {

    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
      initialSlide: 1,
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

export {initAdvantagesSwiper};
