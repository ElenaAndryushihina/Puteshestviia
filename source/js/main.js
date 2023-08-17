import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {openMenu} from './utils/menu';
import {toPlayVideo} from './utils/play-video';
import {toPlayAudio} from './utils/play-audio';
import {initHeroSwiper} from './modules/sliders/init-slider-hero';
import {initToursSwiper} from './modules/sliders/init-slider-tours';
import {initGallerySwiper} from './modules/sliders/init-slider-gallery';
import {initAdvantagesSwiper} from './modules/sliders/init-slider-advantages';
import {initReviewsSwiper} from './modules/sliders/init-slider-reviews';
import {initTrainingSwiper} from './modules/sliders/init-slider-training';
import {initContactsMap} from './modules/maps/init-contacts-map';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  toPlayVideo();
  toPlayAudio();
  openMenu();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    initHeroSwiper();
    initToursSwiper();
    initGallerySwiper();
    initAdvantagesSwiper();
    initReviewsSwiper();
    initTrainingSwiper();
    initContactsMap();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)


// const activeSlide = document.querySelector('.hero__swiper.swiper-slide.swiper-slide-active');
// const activeBackground = document.querySelector('.background-active');
// const slide = document.querySelector('.hero__swiper.swiper-slide');
// const background = document.querySelector('.header__background');
// // const slides = document.querySelectorAll('.hero__swiper.swiper-slide');
// // const headerBackgrounds = document.querySelectorAll('.header__background');

// const makeActiveBackground = function () {
//   for (slide of slides) {
//     if (slide[n].contains('swiper-slide-active')) {
//       background[n].classList.add('background-active')
//     }
//     background.classList.remove('background-active'),
//   }

// };

// // makeActiveBackground();

