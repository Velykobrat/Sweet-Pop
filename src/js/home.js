document.addEventListener('DOMContentLoaded', () => {
  const homeSection = document.querySelector('#home');

  // Додай клас для анімації після завантаження сторінки
  setTimeout(() => {
    homeSection.classList.add('slide-in');
  }, 500); // Затримка в 0.5 секунди
});
