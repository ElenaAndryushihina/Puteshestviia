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

// const body = document.body;
// const header = document.querySelector('[data-header]');
// const navBtn = document.querySelector('[data-nav="button"]');
// const nav = document.querySelector('[data-nav="nav"]');
// const logo = document.querySelector('[data-logo]');
// const phone = document.querySelector('[data-header-phone]');
// const overlay = document.querySelector('[data-overlay]');

// const initNav = () => {
//   navBtn.addEventListener('click', () => {
//     body.classList.toggle('overflow');
//     header.classList.toggle('light');
//     nav.classList.toggle('is-opened');
//     logo.classList.toggle('dark');
//     phone.classList.toggle('dark');
//     overlay.classList.toggle('hidden');
//   });
// };

// export {initNav};
