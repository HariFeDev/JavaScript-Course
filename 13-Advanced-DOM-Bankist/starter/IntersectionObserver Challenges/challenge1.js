'use strict';
const cards = document.querySelectorAll('.card');

const cardCallback = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;      // ✅ skip off-screen cards

    entry.target.classList.add('reveal');
    observer.unobserve(entry.target);       // ✅ observer, not entries
  });
};

const cardObserver = new IntersectionObserver(cardCallback, {
  root: null,
  threshold: 0.15,
});

cards.forEach((card) => cardObserver.observe(card));