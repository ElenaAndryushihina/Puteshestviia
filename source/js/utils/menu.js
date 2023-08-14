const openMenu = function () {
  const navMain = document.querySelector('.header__nav.main-nav');
  const navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('no-js');
  navMain.classList.add('is-close');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('is-open')) {
      navMain.classList.remove('is-open');
      navMain.classList.add('is-close');
    } else {
      navMain.classList.add('is-open');
      navMain.classList.remove('is-close');
    }
  });
};

export {openMenu};
