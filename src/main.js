const burgerMenu = document.querySelector('.burger-menu');
const closeMenuButton = document.querySelector('.close-menu');
const mobileNav = document.querySelector('.header-nav-mobile');
const mobileNavList = document.querySelector('.header-nav-list-mobile');

burgerMenu.addEventListener('click', () => {
  mobileNav.classList.add('menu-open');
});

closeMenuButton.addEventListener('click', () => {
  mobileNav.classList.remove('menu-open');
});

mobileNavList.addEventListener('click', () => {
  mobileNav.classList.remove('menu-open');
});

document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.gallery-item');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  let currentIndex = 0; // Індекс поточної картинки

  function showImage(index) {
    items.forEach((item, i) => {
      item.classList.toggle('active', i === index); // Показати тільки активну картинку
    });
  }

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length; // Перейти до попередньої картинки
    showImage(currentIndex);
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length; // Перейти до наступної картинки
    showImage(currentIndex);
  });

  // Відобразити першу картинку при завантаженні
  showImage(currentIndex);
});
