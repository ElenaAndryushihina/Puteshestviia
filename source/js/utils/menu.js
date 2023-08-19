const openMenu = function () {
  const navMain = document.querySelector('[data-menu-open]');
  const navToggle = document.querySelector('.main-nav__toggle');
  const wrapper = document.querySelector('.wrapper');

  navMain.classList.remove('no-js');
  navMain.classList.add('is-close');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('is-close')) {
      navMain.classList.remove('is-close');
      navMain.classList.add('is-open');
      wrapper.classList.add('wrapper-dark');
    } else {
      navMain.classList.remove('is-open');
      navMain.classList.add('is-close');
      wrapper.classList.remove('wrapper-dark');
    }
  });
};

export {openMenu};
