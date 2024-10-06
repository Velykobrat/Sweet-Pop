const burgerMenu = document.querySelector('.burger-menu');
const closeMenuButton = document.querySelector('.close-menu');
const mobileNav = document.querySelector('.header-nav-mobile');

burgerMenu.addEventListener('click', () => {
  mobileNav.classList.add('menu-open');
});

closeMenuButton.addEventListener('click', () => {
  mobileNav.classList.remove('menu-open');
});
