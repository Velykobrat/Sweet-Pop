const burgerMenu = document.querySelector('.burger-menu');
const closeMenuButton = document.querySelector('.close-menu');
const mobileNav = document.querySelector('.header-nav-mobile');
const mobileNavList = document.querySelector('.header-nav-list-mobile');

burgerMenu.addEventListener('click', () => {
  mobileNav.classList.add('menu-open');
  burgerMenu.setAttribute('aria-expanded', 'true');
});

closeMenuButton.addEventListener('click', () => {
  mobileNav.classList.remove('menu-open');
  burgerMenu.setAttribute('aria-expanded', 'false');
});

mobileNavList.addEventListener('click', () => {
  mobileNav.classList.remove('menu-open');
  burgerMenu.setAttribute('aria-expanded', 'false');
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobileNav.classList.contains('menu-open')) {
    mobileNav.classList.remove('menu-open');
    burgerMenu.setAttribute('aria-expanded', 'false');
    burgerMenu.focus();
  }
});
