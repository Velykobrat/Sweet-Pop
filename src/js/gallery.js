document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.gallery-item');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  let currentIndex = 0; // Індекс поточної активної картинки

  // Функція для відображення картинок
  function showImages() {
    // Прибираємо всі класи з елементів
    items.forEach(item => {
      item.classList.remove('active', 'prev', 'next');
    });

    // Визначаємо попередню та наступну картинку циклічно
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    const nextIndex = (currentIndex + 1) % items.length;

    // Відображаємо елементи в правильному порядку
    items[prevIndex].classList.add('prev');
    items[currentIndex].classList.add('active');
    items[nextIndex].classList.add('next');

    // Переміщуємо елементи, щоб активний був завжди другим
    items.forEach(item => {
      item.style.order = 1; // Встановлюємо порядок для всіх елементів
    });

    items[prevIndex].style.order = 0; // Попередня картинка йде першою
    items[currentIndex].style.order = 1; // Активна картинка йде другою
    items[nextIndex].style.order = 2; // Наступна картинка йде третьою
  }

  // Події для перемикання на попередню картинку
  prevButton.addEventListener('click', () => {
    // Переміщуємо індекс циклічно назад
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showImages();
  });

  // Події для перемикання на наступну картинку
  nextButton.addEventListener('click', () => {
    // Переміщуємо індекс циклічно вперед
    currentIndex = (currentIndex + 1) % items.length;
    showImages();
  });

  // Показати перші три картинки при завантаженні
  showImages();
});
