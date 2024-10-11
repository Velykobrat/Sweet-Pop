// Функція для анімації елементів "How to Play"
function animateHowToPlayItems() {
  const listItems = document.querySelectorAll('.howtoplay-list-item');

  listItems.forEach((item, index) => {
    item.classList.remove(
      'visible',
      'howtoplay-list-item-left',
      'howtoplay-list-item-right'
    );
    setTimeout(() => {
      if (index % 2 === 0) {
        item.classList.add('howtoplay-list-item-left');
      } else {
        item.classList.add('howtoplay-list-item-right');
      }
      setTimeout(() => {
        item.classList.add('visible');
      }, 100);
    }, index * 1000);
  });
}

// const howToPlaySection = document.getElementById('howtoplay');

// const observer = new IntersectionObserver(
//   entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         animateHowToPlayItems();
//       }
//     });
//   },
//   {
//     threshold: 0.1,
//   }
// );

// observer.observe(howToPlaySection);

// document.querySelectorAll('a[href="#howtoplay"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault();

//     howToPlaySection.scrollIntoView({
//       behavior: 'smooth',
//     });

//     setTimeout(() => {
//       animateHowToPlayItems();
//     }, 1000);
//   });
// });

// let isScrolling;
