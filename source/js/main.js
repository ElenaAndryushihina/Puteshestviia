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
