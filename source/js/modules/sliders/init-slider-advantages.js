const Swiper = global.Swiper;

const initAdvantagesSwiper = () => {

  const breakpoint = window.matchMedia('(min-width:1200px)');

  let advantagesSwiper;

  const breakpointChecker = () => {
    if (breakpoint.matches) {
      enableAdvantagesSwiper();
    } else if (advantagesSwiper) {
      advantagesSwiper.destroy(true, true);
    }
  };

  const enableAdvantagesSwiper = () => {
    advantagesSwiper = new Swiper('.advantages__swiper', {

      navigation: {
        nextEl: '.advantages-toggle-next',
        prevEl: '.advantages-toggle-prev',
      },

      loop: true,

      allowTouchMove: false,

      breakpoints: {

        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
          initialSlide: 2,
          centeredSlides: true,
        },
      },
    });
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};

export {initAdvantagesSwiper};
