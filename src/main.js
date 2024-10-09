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

  function showImages() {
    items.forEach((item, i) => {
      item.classList.remove('active', 'prev', 'next'); // Прибираємо всі класи
    });

    // Визначаємо індекси для показу
    const prevIndex = (currentIndex - 1 + items.length) % items.length; // Попередня картинка
    const nextIndex = (currentIndex + 1) % items.length; // Наступна картинка

    // Додаємо класи для активної та сусідніх картинок
    items[currentIndex].classList.add('active');
    items[prevIndex].classList.add('prev');
    items[nextIndex].classList.add('next');
  }

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length; // Перейти до попередньої картинки
    showImages();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length; // Перейти до наступної картинки
    showImages();
  });

  // Відобразити першу картинку при завантаженні
  showImages();
});

// Анімація льодяників на секції home
document.addEventListener('DOMContentLoaded', () => {
  const homeSection = document.querySelector('#home');

  // Додай клас для анімації після завантаження сторінки
  setTimeout(() => {
    homeSection.classList.add('slide-in');
  }, 500); // Затримка в 0.5 секунди
});
